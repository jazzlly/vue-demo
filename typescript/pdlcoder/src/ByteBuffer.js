"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ByteBuffer = void 0;
/**
 * ByteBuffer like netty ByteBuf
 */
const zero_value = 0;
const max_byte_value = (1 << 8) - 1;
const max_short_value = (1 << 16) - 1;
const max_int_value = (1 << 30);
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
        if (aByte < zero_value || aByte > max_byte_value) {
            throw 'pdl buffer error: write byte, out of boundary!';
        }
        this.tryExpand(1);
        this.dataview.setUint8(this.writerIndex, aByte);
        this.writerIndex++;
    }
    writeShort(aShort) {
        if (aShort < zero_value || aShort > max_short_value) {
            throw 'pdl buffer error: write short, out of boundary!';
        }
        this.tryExpand(2);
        this.dataview.setUint16(this.writerIndex, aShort);
        this.writerIndex += 2;
    }
    writeInt(anInt) {
        if (anInt < zero_value || anInt > max_int_value) {
            console.info(`write int: ${anInt}, min: ${zero_value}, max: ${max_int_value}`);
            throw 'pdl buffer error: write int, out of boundary!';
        }
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
            throw 'pdl buffer error: read byte, no enough data to read!';
        }
        let value = this.dataview.getUint8(this.readerIndex);
        this.readerIndex++;
        return value;
    }
    readShort() {
        if (!this.hasBytesToRead(2)) {
            throw 'pdl buffer error: read short, no enough data to read!';
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
        this.readerIndex += byteLen;
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
    resetFromBase64String(base64) {
        this.buffer = Uint8Array.from(atob(base64), c => c.charCodeAt(0)).buffer;
        this.dataview = new DataView(this.buffer);
        this.capability = this.buffer.byteLength;
        this.writerIndex = this.buffer.byteLength;
        this.readerIndex = 0;
        this.writerMark = 0;
    }
}
exports.ByteBuffer = ByteBuffer;
