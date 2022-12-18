import { ByteBuffer } from "../src/ByteBuffer";
import * as httpm from 'typed-rest-client/HttpClient';

let httpc: httpm.HttpClient = new httpm.HttpClient('pdl tester');
const baseUrl: string = 'http://localhost:8080/pdltest/buffer'

async function testWriteByte() {
    const buf = new ByteBuffer()
    const param: number = 123
    buf.writeByte(param)

    let uuid = await (await httpc.get(baseUrl)).readBody();
    let len = await (await httpc.get(`${baseUrl}/writeByte?uuid=${uuid}&param=${param}`)).readBody();
    let base64 = await (await httpc.get(`${baseUrl}/base64String?uuid=${uuid}`)).readBody();
    if (base64 !== buf.base64String()) {
        throw 'testWriteByte failed!'
    }
}

async function testWriteShort() {
    const buf = new ByteBuffer()
    const param: number = 384
    buf.writeShort(param)

    let uuid = await (await httpc.get(baseUrl)).readBody();
    let len = await (await httpc.get(`${baseUrl}/writeShort?uuid=${uuid}&param=${param}`)).readBody();
    let base64 = await (await httpc.get(`${baseUrl}/base64String?uuid=${uuid}`)).readBody();
    if (base64 !== buf.base64String()) {
        throw 'testWriteShort failed!'
    }
}

async function testWriteInt() {
    const buf = new ByteBuffer()
    const param: number = 65539
    buf.writeInt(param)

    let uuid = await (await httpc.get(baseUrl)).readBody();
    let len = await (await httpc.get(`${baseUrl}/writeInt?uuid=${uuid}&param=${param}`)).readBody();
    let base64 = await (await httpc.get(`${baseUrl}/base64String?uuid=${uuid}`)).readBody();
    if (base64 !== buf.base64String()) {
        throw 'testWriteInt failed!'
    }
}

async function testWriteDouble() {
    const buf = new ByteBuffer()
    const param: number = 3.1415926
    buf.writeDouble(param)

    let uuid = await (await httpc.get(baseUrl)).readBody();
    let len = await (await httpc.get(`${baseUrl}/writeDouble?uuid=${uuid}&param=${param}`)).readBody();
    let base64 = await (await httpc.get(`${baseUrl}/base64String?uuid=${uuid}`)).readBody();
    if (base64 !== buf.base64String()) {
        throw 'testWriteDouble failed!'
    }
}

async function testWriteBytes() {
    const buf = new ByteBuffer()
    const param: string = 'asb你好1234#@'
    buf.writeString(param)

    let uuid = await (await httpc.get(baseUrl)).readBody();
    let len = await (await httpc.get(`${baseUrl}/writeString?uuid=${uuid}&param=${encodeURIComponent(param)}`)).readBody();
    let base64 = await (await httpc.get(`${baseUrl}/base64String?uuid=${uuid}`)).readBody();
    
    if (base64 !== buf.base64String()) {
        throw 'testWriteBytes failed!'
    }
}

async function testWriteData() {
    const buf = new ByteBuffer()
    buf.writeByte(255)
    buf.writeShort(65535)
    buf.writeInt(22342)
    buf.writeDouble(3.1415926)
    buf.writeString("asb你好1234#@")
    
    let uuid = await (await httpc.get(baseUrl)).readBody();
    await (await httpc.get(`${baseUrl}/writeByte?uuid=${uuid}&param=255`)).readBody();
    await (await httpc.get(`${baseUrl}/writeShort?uuid=${uuid}&param=65535`)).readBody();
    await (await httpc.get(`${baseUrl}/writeInt?uuid=${uuid}&param=22342`)).readBody();
    await (await httpc.get(`${baseUrl}/writeDouble?uuid=${uuid}&param=3.1415926`)).readBody();
    await (await httpc.get(`${baseUrl}/writeString?uuid=${uuid}&param=${encodeURIComponent("asb你好1234#@")}`)).readBody();
    
    let base64 = await (await httpc.get(`${baseUrl}/base64String?uuid=${uuid}`)).readBody();
    
    // console.info(buf.base64String());
    // console.info(base64);

    if (base64 !== buf.base64String()) {
        throw 'testWriteData failed!'
    }
}


testWriteByte()
testWriteShort()
testWriteInt()
testWriteDouble()
testWriteBytes()
testWriteData()

console.info("test done!");