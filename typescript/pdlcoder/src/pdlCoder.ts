import pb = require("./pdlBeansPolicyBean")
import { ByteBuffer } from "./ByteBuffer"
import { JSONObject, JSONValue, JSONArray } from "./JsonObject";
import * as CodeClassDict from './CodeClassDict';
import * as CodeStringDict from './CodeStringDict'
import * as PdlToCodeDict from './PdlToCodeDict';

/** 扩展字典码头部长度 */
const EXT_CODE_HEADER_LEN: number = 12

/** PDL协议消息第一字节 */
const FRAME_FLAG: number = 0x1500

/**
 * 将java pojo对象编码为pdl协议数据
 * @param frameId 帧ID
 * @param cmdCode 指令字典码, 默认为0x1504
 * @param authCode 授权码
 * @param o java pojo对象
 * @return base64编码pdl协议数据
 */
export function encPdlFrameBase64(
  frameId: number, cmdCode: number, authCode: number, o: any) : string {

    const buffer: ByteBuffer = new ByteBuffer()

    buffer.writeShort(FRAME_FLAG)

    // 记录写入位置，后续回写总长度
    const frameLenIndex: number = buffer.writerIndex
    buffer.writeInt(0);

    buffer.writeInt(frameId);

    // 编码指令字典，功能字典
    const cmdFrameLen: number = encPdlCmdFrame(cmdCode, authCode, o, buffer);

    // 总长度等于帧ID长度 4 byte + 后续数据（除校验部分)长度
    buffer.setInt(frameLenIndex, cmdFrameLen + 4);

    // todo: HMAC
    buffer.writeBytes(Uint8Array.of(0,1, 2, 3,4,5,6,7,8,9));

    return buffer.base64String()
}

/**
     * 将Base64编码PDL协议数据解码为java pojo对象
     * @param base64PdlFrame Base64编码PDL协议数据字符串
     * @param clazz pojo类型。对于未知类型，输入null
     * @return object[2] {pojo对象, 授权码, 帧ID}
     */
export function decPdlFrameBase64(base64PdlFrame: string): any[] {
  let buffer : ByteBuffer = new ByteBuffer()
  buffer.resetFromBase64String(base64PdlFrame)
  
  const frameFlag: number = buffer.readShort();
  if (frameFlag !== FRAME_FLAG) {
    throw 'frame flag wrong!'
  }

  const encCmdFrameLen: number = buffer.readInt();
  const frameId :number = buffer.readInt();

  // 指令代码
  const cmdCode: number = buffer.readShort();

  // 指令授权码长度, 固定为4
  const cmdDataLen = buffer.readShort();
  if (cmdDataLen !==4) {
    throw 'command code len wrong!'
  }

  // 授权码, 4 byte
  const authCode: number = buffer.readInt();

  // 数据帧
  const objects: any[] = decPdlDataOrgJson(buffer);
  return [objects[0], objects[1], frameId]
}

/**
 * 将java pojo对象编码为pdl命令帧
 * @param authCode 授权码
 * @param o pojo对象
 * @param buffer 编码byte buffer
 * @return
 */
function encPdlCmdFrame(cmdCode: number, authCode: number, o: any, buffer: ByteBuffer) {
  // 指令代码
  buffer.writeShort(cmdCode);
  // 指令授权码长度, 固定为4
  buffer.writeShort(4);
  // 授权码, 4 byte
  buffer.writeInt(authCode);

  // 数据帧
  return encPdlDataFrames(o, '', buffer);
}

/**
 * 将对象进行PDL编码
 * @param o 待编码对象
 * @param filedName 对象在父对象中的成员名称
 * @param buffer 保存PDL二进制编码的ByteBuf
 * @return 本次写入buffer的byte长度
 */
export function encPdlDataFrames(o: any, filedName: string, buffer: ByteBuffer): number {
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
    classCode = CodeClassDict.CLASS_CODE_PRIM_MIN + 8
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
      len += encPdlDataFrames(o1, `${filedName}[${i++}]`, buffer);
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

/**
 * 解码PDL协议帧
 * @param buffer 协议帧二进制字节buffer
 * @return 解码对象数组,
 *  o[0]: 解码后的JSONObject对象
 *  o[1]: JSONObject对象在父对象中field名称
 *  o[2]: JSONObject对象在buffer中占用字节数，包括帧头信息
 */
export function decPdlDataOrgJson(buffer: ByteBuffer): any[] {
  if (buffer.readableBytes() <= 0) {
    throw 'pdl coder, decode , not enough data!'
  }

  let funcDictCode: number = buffer.readShort();

  // 扩展头数据长度, 8 bytes
  let funcDictLen: number = buffer.readShort();
  if (8 != funcDictLen) {
    throw "func dict header not valid!"
  }

  // 对象的class类型信息编码
  let classCode: number = buffer.readShort()
  if (classCode > CodeClassDict.CLASS_CODE_OBJECT) {
    classCode = CodeClassDict.CLASS_CODE_OBJECT;
  }

  let stringCode: number = buffer.readShort();
  let fieldName: string = CodeStringDict.getString(stringCode) as string;

  let dataLen: number = buffer.readInt();
  let byteCount: number = dataLen;

  if (classCode >= CodeClassDict.CLASS_CODE_PRIM_MIN &&
    classCode <= CodeClassDict.CLASS_CODE_PRIM_MAX) {
    // 如果是基础类型, 直接获取数据基础类型数据
    return [
      readPrimitive(classCode, buffer, dataLen),
      fieldName,
      dataLen + EXT_CODE_HEADER_LEN];
  } else if (classCode == CodeClassDict.CLASS_CODE_LIST ||
    classCode == CodeClassDict.CLASS_CODE_SET) {
      let jsonArray: JSONArray = []
    
    while (byteCount > 0) {
      let objects = decPdlDataOrgJson(buffer);
      let childObj = objects[0];
      let readBytes : number = objects[2] as number;

      jsonArray.push(childObj);
      byteCount -= readBytes;
    }

    if (byteCount != 0) {
      throw "data len error!"
    }

    return [jsonArray, fieldName, dataLen + EXT_CODE_HEADER_LEN ]
  } else if (classCode >= CodeClassDict.CLASS_CODE_OBJECT) {
    let jsonObject: JSONObject = {}

    while (byteCount > 0) {
      let objects = decPdlDataOrgJson(buffer);
      let childObj = objects[0];
      let childFieldName : string = objects[1] as string;
      let readBytes: number = objects[2] as number;

      if (isUndefinedOrNull(childFieldName) || "" === childFieldName) {
        throw "child field not found, please add field name to CodeStringDict!" + childFieldName
      }
      jsonObject[childFieldName] = childObj

      byteCount -= readBytes;
    }

    if (byteCount !== 0) {
      throw "data len error!"
    }
    return [jsonObject, fieldName, dataLen + EXT_CODE_HEADER_LEN]
  } else {
    throw "unknown class code: " + classCode
  }
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

function readPrimitive(classCode: number, buffer: ByteBuffer, len: number) {
  switch (classCode) {
    case 0:
      if (len !== 1) {
        throw "readPrimitive internal error!"
      }
      return buffer.readByte() == 1 ? true : false
    case 7:
      if (len !== 8) {
        throw "readPrimitive internal error!"
      }
      return buffer.readDouble()
    case 8:
      return buffer.readString(len)
    default:
      throw "illegal primitive class code: " + classCode
  }
}

