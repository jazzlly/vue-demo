"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ByteBuffer = void 0;
/**
 * ByteBuffer like netty ByteBuf
 */
class ByteBuffer {
    constructor(writerIndex = 0, readerIndex = 0, capability = 1, writerMark = 0) {
        this.writerIndex = writerIndex;
        this.readerIndex = readerIndex;
        this.capability = capability;
        this.writerMark = writerMark;
        this.buffer = new ArrayBuffer(capability);
        this.dataview = new DataView(this.buffer);
        this.encoder = new TextEncoder();
        this.decoder = new TextDecoder();
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
        return bytes.byteLength;
    }
    writeString(aStr) {
        return this.writeBytes(this.encoder.encode(aStr));
    }
    base64String() {
        const base64 = btoa(new Uint8Array(this.buffer, 0, this.writerIndex)
            .reduce((data, byte) => data + String.fromCharCode(byte), ''));
        return base64;
    }
    readByte() {
        if (!this.hasBytesToRead(1)) {
            return NaN;
        }
        let value = this.dataview.getUint8(this.readerIndex);
        this.readerIndex++;
        return value;
    }
    readShort() {
        if (!this.hasBytesToRead(2)) {
            return NaN;
        }
        let value = this.dataview.getUint16(this.readerIndex);
        this.readerIndex += 2;
        return value;
    }
    readInt() {
        if (!this.hasBytesToRead(4)) {
            return NaN;
        }
        let value = this.dataview.getUint32(this.readerIndex);
        this.readerIndex += 4;
        return value;
    }
    readDouble() {
        if (!this.hasBytesToRead(8)) {
            return NaN;
        }
        let value = this.dataview.getFloat64(this.readerIndex);
        this.readerIndex += 8;
        return value;
    }
    readBytes(byteLen) {
        if (!this.hasBytesToRead(byteLen)) {
            throw 'illegal status';
        }
        let buf = new ArrayBuffer(byteLen);
        let array = new Uint8Array(buf);
        for (let index = 0; index < byteLen; index++) {
            array[index] = this.dataview.getUint8(this.readerIndex + index);
        }
        return array;
    }
    readString(byteLen) {
        return this.decoder.decode(this.readBytes(byteLen));
    }
    setShort(byteOffset, value) {
        this.dataview.setUint16(byteOffset, value);
    }
    setInt(byteOffset, value) {
        this.dataview.setUint32(byteOffset, value);
    }
    getDouble(byteOffset) {
        return this.dataview.getFloat64(byteOffset);
    }
    readableBytes() {
        return this.writerIndex - this.readerIndex;
    }
    hasBytesToRead(byteLen) {
        return this.readableBytes() >= byteLen;
    }
    tryExpand(byteLen) {
        if (this.writerIndex + byteLen <= this.capability) {
            return;
        }
        let newCap = this.capability * 2;
        while (this.writerIndex + byteLen > newCap) {
            newCap *= 2;
        }
        let newArray = new ArrayBuffer(newCap);
        (new Uint8Array(newArray, 0, this.capability)).set(new Uint8Array(this.buffer));
        this.buffer = newArray;
        this.dataview = new DataView(newArray);
        this.capability = newCap;
    }
}
exports.ByteBuffer = ByteBuffer;
