"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encPdlDataFrames = void 0;
const CodeClassDict = __importStar(require("./CodeClassDict"));
const CodeStringDict = __importStar(require("./CodeStringDict"));
const PdlToCodeDict = __importStar(require("./PdlToCodeDict"));
function foo(o, key, value) {
    o[key] = value;
    return o;
}
/** 扩展字典码头部长度 */
const EXT_CODE_HEADER_LEN = 12;
/**
 * 将对象进行PDL编码
 * @param o 待编码对象
 * @param filedName 对象在父对象中的成员名称
 * @param buffer 保存PDL二进制编码的ByteBuf
 * @return 本次写入buffer的byte长度
 */
function encPdlDataFrames(o, filedName, buffer) {
    if (isUndefinedOrNull(o)) {
        return 0;
    }
    /* 1. 如果filedName=rules, o.className = RuleBean,
      这个是一个rule对象，需要查表设置pdl字典码
      todo: 自定义字典码，需要一所最终确定
      2. 检查o的glassname，while到基类， + fieldName
    */
    // 标记一下, 如果是rule对象，需要回写这个short
    let pdlCodeIndex = buffer.writerIndex;
    buffer.writeShort(0x7fff);
    // 扩展头数据长度, 8 bytes
    buffer.writeShort(8);
    // 写入数据部分
    // 写入对象的class类型信息编码
    let classCode = CodeClassDict.CLASS_CODE_OBJECT;
    if (isBoolean(o)) {
        classCode = CodeClassDict.CLASS_CODE_PRIM_MIN;
    }
    if (isNumber(o)) {
        classCode = CodeClassDict.CLASS_CODE_PRIM_MIN + 7;
    }
    if (isString(o)) {
        classCode = CodeClassDict.CLASS_CODE_PRIM_MIN + 8;
    }
    if (isArray(o)) {
        classCode = CodeClassDict.CLASS_CODE_LIST;
    }
    buffer.writeShort(classCode);
    // 写入对象对应父对象的field名称。由于根对象没有filed名称，填写固定值0x7fff
    if (isUndefinedOrNull(filedName)) {
        buffer.writeShort(0x7fff);
    }
    else {
        let code1 = CodeStringDict.getCode(filedName);
        if (isUndefinedOrNull(code1)) {
            buffer.writeShort(0x7fff);
        }
        else {
            buffer.writeShort(code1);
        }
    }
    let lenWriteIndex1 = buffer.writerIndex;
    buffer.writeInt(0);
    let len = 0;
    if (classCode >= CodeClassDict.CLASS_CODE_PRIM_MIN &&
        classCode <= CodeClassDict.CLASS_CODE_PRIM_MAX) {
        // 如果是基础类型, 直接写入基础类型数据
        len = writePrimitive(o, classCode, buffer);
    }
    else if (classCode === CodeClassDict.CLASS_CODE_LIST) {
        // 如果是List类型, 遍历list，找到所有的成员
        // 递归调用函数，处理对象
        let i = 0;
        for (const o1 of o) {
            len += encPdlDataFrames(o1, `${filedName}[${i++}]`, buffer);
        }
    }
    else if (classCode > CodeClassDict.CLASS_CODE_LIST) {
        // 如果是pojo类型, 通过反射找到对象的所有非静态域
        // 递归调用函数，处理对象
        for (let key in o) {
            if (o.hasOwnProperty(key) && typeof (o[key] !== 'function')) {
                let tmpLen = encPdlDataFrames(o[key], key, buffer);
                len += tmpLen;
                if (!isUndefinedOrNull(filedName) &&
                    filedName.startsWith("rules[") &&
                    key === 'ruleType') {
                    // todo: 
                    let ruleType = buffer.getDouble(buffer.writerIndex - 8);
                    let pdlCode = PdlToCodeDict.getPdlCode(ruleType);
                    if (!isUndefinedOrNull(pdlCode)) {
                        buffer.setShort(pdlCodeIndex, pdlCode);
                    }
                }
            }
        }
    }
    else {
        throw `unknown class code: ${classCode}`;
    }
    buffer.setInt(lenWriteIndex1, len);
    return EXT_CODE_HEADER_LEN + len;
}
exports.encPdlDataFrames = encPdlDataFrames;
// iterPolicyBean(objPolicyBean, 0)
// function iterPolicyBean(o: any, indent: number): void {
//   if (isUndefinedOrNull(o)) {
//     return;
//   }
//   if (isBoolean(o) || isString(o) || isNumber(o)) {
//     console.info(' '.repeat(indent).concat(o.toString()))
//     return
//   }
//   if (isArray(o)) {
//     for (const e of o) {
//       console.info(' '.repeat(indent).concat('['))
//       iterPolicyBean(e, indent + 2)
//       console.info(' '.repeat(indent).concat(']'))
//     }
//     return
//   }
//   console.info(' '.repeat(indent).concat('{'))
//   console.info(' '.repeat(indent).concat(protCall(o)))
//   for (let key in o) {
//     if (o.hasOwnProperty(key) && typeof (o[key] !== 'function')) {
//       console.info(' '.repeat(indent).concat(key).concat(':'))
//       iterPolicyBean(o[key], indent + 2)
//     }
//   }
//   console.info(' '.repeat(indent).concat('}'))
// }
function isUndefinedOrNull(o) {
    return o === undefined || o === null;
}
function isBoolean(o) {
    if (typeof (o) === 'boolean' || o instanceof Boolean) {
        return true;
    }
    return false;
}
// 8 bytes double
function isNumber(o) {
    if (typeof (o) === 'number' || o instanceof Number) {
        return true;
    }
    return false;
}
function isString(o) {
    if (typeof (o) === 'string' || o instanceof String) {
        return true;
    }
    return false;
}
function isArray(o) {
    if (o instanceof Array) {
        return true;
    }
    return false;
}
function protCall(o) {
    return Object.prototype.toString.call(o);
}
function writePrimitive(o, classCode, buffer) {
    switch (classCode) {
        case 0:
            buffer.writeByte(o ? 1 : 0);
            return 1;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            buffer.writeDouble(o);
            return 8;
        case 8:
            return buffer.writeString(o);
        default:
            throw `unknowns class code for write ${classCode}!`;
    }
}
