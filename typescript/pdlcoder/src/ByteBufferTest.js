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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ByteBuffer_1 = require("../src/ByteBuffer");
const httpm = __importStar(require("typed-rest-client/HttpClient"));
// import * as rm from 'typed-rest-client/RestClient';
// let rest: rm.RestClient = new rm.RestClient('pdl tester', 
//     'http://localhost:8080/pdltest/buffer')
let httpc = new httpm.HttpClient('pdl tester');
const baseUrl = 'http://localhost:8080/pdltest/buffer';
function testWriteByte() {
    return __awaiter(this, void 0, void 0, function* () {
        const buf = new ByteBuffer_1.ByteBuffer();
        const param = 123;
        buf.writeByte(param);
        let uuid = yield (yield httpc.get(baseUrl)).readBody();
        let len = yield (yield httpc.get(`${baseUrl}/writeByte?uuid=${uuid}&param=${param}`)).readBody();
        let base64 = yield (yield httpc.get(`${baseUrl}/base64String?uuid=${uuid}`)).readBody();
        if (base64 !== buf.base64String()) {
            throw 'testWriteByte failed!';
        }
    });
}
function testWriteShort() {
    return __awaiter(this, void 0, void 0, function* () {
        const buf = new ByteBuffer_1.ByteBuffer();
        const param = 384;
        buf.writeShort(param);
        let uuid = yield (yield httpc.get(baseUrl)).readBody();
        let len = yield (yield httpc.get(`${baseUrl}/writeShort?uuid=${uuid}&param=${param}`)).readBody();
        let base64 = yield (yield httpc.get(`${baseUrl}/base64String?uuid=${uuid}`)).readBody();
        if (base64 !== buf.base64String()) {
            throw 'testWriteShort failed!';
        }
    });
}
function testWriteInt() {
    return __awaiter(this, void 0, void 0, function* () {
        const buf = new ByteBuffer_1.ByteBuffer();
        const param = 65539;
        buf.writeInt(param);
        let uuid = yield (yield httpc.get(baseUrl)).readBody();
        let len = yield (yield httpc.get(`${baseUrl}/writeInt?uuid=${uuid}&param=${param}`)).readBody();
        let base64 = yield (yield httpc.get(`${baseUrl}/base64String?uuid=${uuid}`)).readBody();
        if (base64 !== buf.base64String()) {
            throw 'testWriteInt failed!';
        }
    });
}
function testWriteDouble() {
    return __awaiter(this, void 0, void 0, function* () {
        const buf = new ByteBuffer_1.ByteBuffer();
        const param = 3.1415926;
        buf.writeDouble(param);
        let uuid = yield (yield httpc.get(baseUrl)).readBody();
        let len = yield (yield httpc.get(`${baseUrl}/writeDouble?uuid=${uuid}&param=${param}`)).readBody();
        let base64 = yield (yield httpc.get(`${baseUrl}/base64String?uuid=${uuid}`)).readBody();
        if (base64 !== buf.base64String()) {
            throw 'testWriteDouble failed!';
        }
    });
}
function testWriteBytes() {
    return __awaiter(this, void 0, void 0, function* () {
        const buf = new ByteBuffer_1.ByteBuffer();
        const param = 'asb你好1234#@';
        buf.writeString(param);
        let uuid = yield (yield httpc.get(baseUrl)).readBody();
        let len = yield (yield httpc.get(`${baseUrl}/writeString?uuid=${uuid}&param=${encodeURIComponent(param)}`)).readBody();
        let base64 = yield (yield httpc.get(`${baseUrl}/base64String?uuid=${uuid}`)).readBody();
        if (base64 !== buf.base64String()) {
            throw 'testWriteBytes failed!';
        }
    });
}
function testWriteData() {
    return __awaiter(this, void 0, void 0, function* () {
        const buf = new ByteBuffer_1.ByteBuffer();
        buf.writeByte(255);
        buf.writeShort(65535);
        buf.writeInt(22342);
        buf.writeDouble(3.1415926);
        buf.writeString("asb你好1234#@");
        let uuid = yield (yield httpc.get(baseUrl)).readBody();
        yield (yield httpc.get(`${baseUrl}/writeByte?uuid=${uuid}&param=255`)).readBody();
        yield (yield httpc.get(`${baseUrl}/writeShort?uuid=${uuid}&param=65535`)).readBody();
        yield (yield httpc.get(`${baseUrl}/writeInt?uuid=${uuid}&param=22342`)).readBody();
        yield (yield httpc.get(`${baseUrl}/writeDouble?uuid=${uuid}&param=3.1415926`)).readBody();
        yield (yield httpc.get(`${baseUrl}/writeString?uuid=${uuid}&param=${encodeURIComponent("asb你好1234#@")}`)).readBody();
        let base64 = yield (yield httpc.get(`${baseUrl}/base64String?uuid=${uuid}`)).readBody();
        console.info(buf.base64String());
        console.info(base64);
        if (base64 !== buf.base64String()) {
            throw 'testWriteData failed!';
        }
    });
}
testWriteByte();
testWriteShort();
testWriteInt();
testWriteDouble();
testWriteBytes();
testWriteData();
console.info("test done!");
