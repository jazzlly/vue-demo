import * as PdlCoder from './pdlCoder';

import {JSONObject} from './JsonObject';
import { ByteBuffer } from './ByteBuffer';
import * as _ from 'lodash';

function testEncEmptyObject() { 
    const jo: JSONObject = {}
    const buffer: ByteBuffer = new ByteBuffer()

    PdlCoder.encPdlDataFrames(jo, "", buffer)
    console.info(buffer.base64String());

    let results = PdlCoder.decPdlDataOrgJson(buffer)
    assertEncodeThenDecode(results[0], jo, buffer)
}

function testEncBoolean() { 
    const jo: JSONObject = {}
    jo.aBoolean = true

    const buffer: ByteBuffer = new ByteBuffer()
    PdlCoder.encPdlDataFrames(jo, "", buffer)
    console.info(buffer.base64String());

    let results = PdlCoder.decPdlDataOrgJson(buffer)
    assertEncodeThenDecode(results[0], jo, buffer)
}

function testEncBooleanFalse() { 
    const jo: JSONObject = {}
    jo.aBoolean = false

    const buffer: ByteBuffer = new ByteBuffer()
    PdlCoder.encPdlDataFrames(jo, "", buffer)
    console.info(buffer.base64String());

    let results = PdlCoder.decPdlDataOrgJson(buffer)
    assertEncodeThenDecode(results[0], jo, buffer)
}

function testEncByte() { 
    const jo: JSONObject = {}
    jo.aByte = 123

    const buffer: ByteBuffer = new ByteBuffer()
    PdlCoder.encPdlDataFrames(jo, "", buffer)
    console.info(buffer.base64String());

    let results = PdlCoder.decPdlDataOrgJson(buffer)
    assertEncodeThenDecode(results[0], jo, buffer)
}


function testEncFloat() { 
    const jo: JSONObject = {}
    jo.aDouble = 3.1415926

    const buffer: ByteBuffer = new ByteBuffer()
    PdlCoder.encPdlDataFrames(jo, "", buffer)
    console.info(buffer.base64String());

    let results = PdlCoder.decPdlDataOrgJson(buffer)
    assertEncodeThenDecode(results[0], jo, buffer)
}

function testEncString() { 
    const jo: JSONObject = {}
    jo.aString = '你好娃哈哈12#$!'

    const buffer: ByteBuffer = new ByteBuffer()
    PdlCoder.encPdlDataFrames(jo, "", buffer)
    console.info(buffer.base64String());

    let results = PdlCoder.decPdlDataOrgJson(buffer)
    assertEncodeThenDecode(results[0], jo, buffer)
}

function testEncObj() { 
    const jo: JSONObject = {}
    jo.aBoolean = true
    jo.aByte = 123
    jo.aDouble = 3.1415926
    jo.aString = '你好娃哈哈12#$!'

    const buffer: ByteBuffer = new ByteBuffer()
    PdlCoder.encPdlDataFrames(jo, "", buffer)
    console.info(buffer.base64String());

    let results = PdlCoder.decPdlDataOrgJson(buffer)
    assertEncodeThenDecode(results[0], jo, buffer)
}

function testEncObjArray() { 
    const jo: JSONObject = {}
    jo.aBoolean = true
    jo.aByte = 123
    jo.aDouble = 3.1415926
    jo.aString = '你好娃哈哈12#$!'
    jo.anArray = [true, 5.0, '哈哈', {aString: 'bar哈哈'}]
    jo.aPojo = {
        aBoolean: true, aShort: 123, aDouble: 3.1415926, aString: "哈哈",
        anArray : [true, 5.0, '哈哈', {aString: 'bar哈哈'}]
    }

    const buffer: ByteBuffer = new ByteBuffer()
    PdlCoder.encPdlDataFrames(jo, "", buffer)
    console.info(buffer.base64String());

    let results = PdlCoder.decPdlDataOrgJson(buffer)
    assertEncodeThenDecode(results[0], jo, buffer)
}

export function assertEncodeThenDecode(o1: any, o2: any, buffer: ByteBuffer) {
    if (buffer.writerIndex !== buffer.readerIndex) {
        throw 'write index not equal read index'
    }

    if (!_.isEqual(o1, o2)) {
        throw 'obj not equal!'
    }
}

testEncEmptyObject()
testEncBoolean()
testEncBooleanFalse()
testEncByte()
testEncFloat()
testEncString()
testEncObj()
testEncObjArray()