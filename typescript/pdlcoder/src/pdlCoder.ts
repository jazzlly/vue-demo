import pb = require("./pdlBeans")
import { ByteBuffer } from "./ByteBuffer"
import { JSONObject, JSONValue, JSONArray } from "./JsonObject";
import * as CodeClassDict from './CodeClassDict';
import * as CodeStringDict from './CodeStringDict'
import * as PdlToCodeDict from './PdlToCodeDict';

function foo(o: JSONObject, key: string, value: JSONValue) {
  o[key] = value;
  return o;
}

/** 扩展字典码头部长度 */
const EXT_CODE_HEADER_LEN : number = 12;

/**
 * 将对象进行PDL编码
 * @param o 待编码对象
 * @param filedName 对象在父对象中的成员名称
 * @param buffer 保存PDL二进制编码的ByteBuf
 * @return 本次写入buffer的byte长度
 */
export function encPdlDataFrames(o: any, filedName: string | null, buffer: ByteBuffer) : number {
  if (isUndefinedOrNull(o)) {
    return 0
  }

  /* 1. 如果filedName=rules, o.className = RuleBean,
    这个是一个rule对象，需要查表设置pdl字典码
    todo: 自定义字典码，需要一所最终确定
    2. 检查o的glassname，while到基类， + fieldName
  */

  // 标记一下, 如果是rule对象，需要回写这个short
  let pdlCodeIndex: number = buffer.writerIndex
  buffer.writeShort(0x7fff)

  // 扩展头数据长度, 8 bytes
  buffer.writeShort(8)

  // 写入数据部分

  // 写入对象的class类型信息编码
  let classCode: number = CodeClassDict.CLASS_CODE_OBJECT
  if (isBoolean(o)) {
    classCode = CodeClassDict.CLASS_CODE_PRIM_MIN
  }
  if (isNumber(o)) {
    classCode = CodeClassDict.CLASS_CODE_PRIM_MIN + 7
  }
  if (isString(o)) {
    classCode = CodeClassDict.CLASS_CODE_PRIM_MIN +8
  }
  if (isArray(o)) {
    classCode = CodeClassDict.CLASS_CODE_LIST;
  }
  buffer.writeShort(classCode);
  
  // 写入对象对应父对象的field名称。由于根对象没有filed名称，填写固定值0x7fff
  if (isUndefinedOrNull(filedName)) {
    buffer.writeShort(0x7fff)
  } else {
    let code1 = CodeStringDict.getCode(filedName as string)
    if (isUndefinedOrNull(code1)) {
      buffer.writeShort(0x7fff);
    } else {
      buffer.writeShort(code1 as number)
    }
  }

  let lenWriteIndex1 = buffer.writerIndex
  buffer.writeInt(0)

  let len = 0

  if (classCode >= CodeClassDict.CLASS_CODE_PRIM_MIN &&
    classCode <= CodeClassDict.CLASS_CODE_PRIM_MAX) {
    // 如果是基础类型, 直接写入基础类型数据
    len = writePrimitive(o, classCode, buffer);
  } else if (classCode === CodeClassDict.CLASS_CODE_LIST) {
    // 如果是List类型, 遍历list，找到所有的成员
    // 递归调用函数，处理对象
    let i = 0
    for (const o1 of o) {
      len += encPdlDataFrames(o1,  `${filedName}[${i++}]`, buffer);
    }
  } else if (classCode > CodeClassDict.CLASS_CODE_LIST) {
    // 如果是pojo类型, 通过反射找到对象的所有非静态域
    // 递归调用函数，处理对象
    for (let key in o) {
      if (o.hasOwnProperty(key) && typeof (o[key] !== 'function')) {
        let tmpLen = encPdlDataFrames(o[key], key, buffer);
        len += tmpLen;

        if (!isUndefinedOrNull(filedName) && 
          (filedName as string).startsWith("rules[") &&
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
  } else {
    throw `unknown class code: ${classCode}`
  }

  buffer.setInt(lenWriteIndex1, len);
  return EXT_CODE_HEADER_LEN + len;
}


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


function isUndefinedOrNull(o: any): boolean {
  return o === undefined || o === null;
}

function isBoolean(o: any): boolean {
  if (typeof (o) === 'boolean' || o instanceof Boolean) {
    return true
  }
  return false
}

// 8 bytes double
function isNumber(o: any): boolean {
  if (typeof (o) === 'number' || o instanceof Number) {
    return true
  }
  return false
}

function isString(o: any): boolean {
  if (typeof (o) === 'string' || o instanceof String) {
    return true
  }
  return false
}

function isArray(o: any) {
  if (o instanceof Array) {
    return true;
  }
  return false
}

function protCall(o: any): string {
  return Object.prototype.toString.call(o);
}

function writePrimitive(o: any, classCode: number, buffer: ByteBuffer): number {
  switch (classCode) {
      case 0:
          buffer.writeByte(o as boolean ? 1 : 0);
          return 1;
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        buffer.writeDouble(o as number)
        return 8;
      case 8:
        return buffer.writeString(o as string)
      default:
        throw `unknowns class code for write ${classCode}!`
  }
}