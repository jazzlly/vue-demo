"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ByteBuffer = void 0;
/**
 * ByteBuffer like netty ByteBuf
 */
class ByteBuffer {
    constructor(writerIndex = 0, readerIndex = 0, capability = 128, writerMark = 0) {
        this.writerIndex = writerIndex;
        this.readerIndex = readerIndex;
        this.capability = capability;
        this.writerMark = writerMark;
        this.buffer = new ArrayBuffer(capability);
        this.dataview = new DataView(this.buffer);
        this.encoder = new TextEncoder();
    }
    writeByte(aByte) {
        this.tryExpand(1);
        this.dataview.setUint8(this.writerIndex, aByte);
        this.writerIndex++;
    }
    writeShort(aShort) {
        this.tryExpand(2);
        this.dataview.setUint16(this.writerIndex, aShort);
        this.writerIndex += 2;
    }
    writeInt(anInt) {
        this.tryExpand(4);
        this.dataview.setUint32(this.writerIndex, anInt);
        this.writerIndex += 4;
    }
    writeDouble(aDouble) {
        this.tryExpand(8);
        this.dataview.setFloat64(this.writerIndex, aDouble);
        this.writerIndex += 8;
    }
    writeBytes(bytes) {
        this.tryExpand(bytes.byteLength);
        for (let index = 0; index < bytes.byteLength; index++) {
            this.dataview.setUint8(this.writerIndex + index, bytes[index]);
        }
        this.writerIndex += bytes.byteLength;
    }
    writeString(aStr) {
        this.writeBytes(this.encoder.encode(aStr));
    }
    base64String() {
        const base64 = btoa(new Uint8Array(this.buffer, 0, this.writerIndex)
            .reduce((data, byte) => data + String.fromCharCode(byte), ''));
        return base64;
    }
    readByte() {
        throw 'todo';
    }
    readShort() {
        throw 'todo';
    }
    readInt() {
        throw 'todo';
    }
    readNumber() {
        throw 'todo';
    }
    setInt(int, index) {
        throw 'todo';
    }
    readableBytes() {
        throw 'todo';
    }
    tryExpand(byteLen) {
        // todo:
        console.info("try expand, todo ...");
        // var oldBuffer = new ArrayBuffer(20);
        // var newBuffer = new ArrayBuffer(40);
        // new Uint8Array(newBuffer).set(oldBuffer);
    }
    resizeUint8(baseArrayBuffer, newByteSize) {
        var resizedArrayBuffer = new ArrayBuffer(newByteSize), len = baseArrayBuffer.byteLength, resizeLen = (len > newByteSize) ? newByteSize : len;
        (new Uint8Array(resizedArrayBuffer, 0, resizeLen)).set(new Uint8Array(baseArrayBuffer, 0, resizeLen));
        return resizedArrayBuffer;
    }
}
exports.ByteBuffer = ByteBuffer;
