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
exports.assertEncodeThenDecode = void 0;
const PdlCoder = __importStar(require("./pdlCoder"));
const ByteBuffer_1 = require("./ByteBuffer");
const _ = __importStar(require("lodash"));
function testEncEmptyObject() {
    const jo = {};
    const buffer = new ByteBuffer_1.ByteBuffer();
    PdlCoder.encPdlDataFrames(jo, "", buffer);
    console.info(buffer.base64String());
    let results = PdlCoder.decPdlDataOrgJson(buffer);
    assertEncodeThenDecode(results[0], jo, buffer);
}
function testEncBoolean() {
    const jo = {};
    jo.aBoolean = true;
    const buffer = new ByteBuffer_1.ByteBuffer();
    PdlCoder.encPdlDataFrames(jo, "", buffer);
    console.info(buffer.base64String());
    let results = PdlCoder.decPdlDataOrgJson(buffer);
    assertEncodeThenDecode(results[0], jo, buffer);
}
function testEncBooleanFalse() {
    const jo = {};
    jo.aBoolean = false;
    const buffer = new ByteBuffer_1.ByteBuffer();
    PdlCoder.encPdlDataFrames(jo, "", buffer);
    console.info(buffer.base64String());
    let results = PdlCoder.decPdlDataOrgJson(buffer);
    assertEncodeThenDecode(results[0], jo, buffer);
}
function testEncByte() {
    const jo = {};
    jo.aByte = 123;
    const buffer = new ByteBuffer_1.ByteBuffer();
    PdlCoder.encPdlDataFrames(jo, "", buffer);
    console.info(buffer.base64String());
    let results = PdlCoder.decPdlDataOrgJson(buffer);
    assertEncodeThenDecode(results[0], jo, buffer);
}
function testEncFloat() {
    const jo = {};
    jo.aDouble = 3.1415926;
    const buffer = new ByteBuffer_1.ByteBuffer();
    PdlCoder.encPdlDataFrames(jo, "", buffer);
    console.info(buffer.base64String());
    let results = PdlCoder.decPdlDataOrgJson(buffer);
    assertEncodeThenDecode(results[0], jo, buffer);
}
function testEncString() {
    const jo = {};
    jo.aString = '你好娃哈哈12#$!';
    const buffer = new ByteBuffer_1.ByteBuffer();
    PdlCoder.encPdlDataFrames(jo, "", buffer);
    console.info(buffer.base64String());
    let results = PdlCoder.decPdlDataOrgJson(buffer);
    assertEncodeThenDecode(results[0], jo, buffer);
}
function testEncObj() {
    const jo = {};
    jo.aBoolean = true;
    jo.aByte = 123;
    jo.aDouble = 3.1415926;
    jo.aString = '你好娃哈哈12#$!';
    const buffer = new ByteBuffer_1.ByteBuffer();
    PdlCoder.encPdlDataFrames(jo, "", buffer);
    console.info(buffer.base64String());
    let results = PdlCoder.decPdlDataOrgJson(buffer);
    assertEncodeThenDecode(results[0], jo, buffer);
}
function testEncObjArray() {
    const jo = {};
    jo.aBoolean = true;
    jo.aByte = 123;
    jo.aDouble = 3.1415926;
    jo.aString = '你好娃哈哈12#$!';
    jo.anArray = [true, 5.0, '哈哈', { aString: 'bar哈哈' }];
    jo.aPojo = {
        aBoolean: true, aShort: 123, aDouble: 3.1415926, aString: "哈哈",
        anArray: [true, 5.0, '哈哈', { aString: 'bar哈哈' }]
    };
    const buffer = new ByteBuffer_1.ByteBuffer();
    PdlCoder.encPdlDataFrames(jo, "", buffer);
    console.info(buffer.base64String());
    let results = PdlCoder.decPdlDataOrgJson(buffer);
    assertEncodeThenDecode(results[0], jo, buffer);
}
function assertEncodeThenDecode(o1, o2, buffer) {
    if (buffer.writerIndex !== buffer.readerIndex) {
        throw 'write index not equal read index';
    }
    if (!_.isEqual(o1, o2)) {
        throw 'obj not equal!';
    }
}
exports.assertEncodeThenDecode = assertEncodeThenDecode;
testEncEmptyObject();
testEncBoolean();
testEncBooleanFalse();
testEncByte();
testEncFloat();
testEncString();
testEncObj();
testEncObjArray();
