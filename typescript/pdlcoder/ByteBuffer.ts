/**
 * ByteBuffer like netty ByteBuf
 */
class ByteBuffer {

    // writerIndex: number

    // readerIndex: number

    constructor(
        writerIndex: number = 0, 
        readerIndex: number = 0,
        capability: number = 16,
        writerMark: number = 0, 
        buffer: ArrayBuffer = new ArrayBuffer(capability)
        ) {
    }

    writeByte(aByte: number) {
        throw 'todo'
        return this
    }
    
    writeShort(short: number) {
        throw 'todo'
        return this
    }

    writeInt(int: number) {
        throw 'todo'
        return this
    }

    writeNumber(num: number) {
        throw 'todo'
        return this
    }

    writeBytes(bytes: Uint8Array) {
        throw 'todo'
        return this
    }

    readByte(): number {
        throw 'todo'
    }

    readShort(): number {
        throw 'todo'
    }

    readInt(): number {
        throw 'todo'
    }

    setInt(int: number, index: number) {
        throw 'todo'
    }

    expand() {
        // todo:
        // var oldBuffer = new ArrayBuffer(20);
        // var newBuffer = new ArrayBuffer(40);
        // new Uint8Array(newBuffer).set(oldBuffer);
    }

    resizeUint8(baseArrayBuffer: ArrayBuffer, newByteSize: number) {
        var resizedArrayBuffer = new ArrayBuffer(newByteSize),
            len = baseArrayBuffer.byteLength,
            resizeLen = (len > newByteSize) ? newByteSize : len;

        (new Uint8Array(resizedArrayBuffer, 0, resizeLen)).set(new Uint8Array(baseArrayBuffer, 0, resizeLen));

        return resizedArrayBuffer;
    }
}

//  let byteBuffer = new ByteBuffer()
export { ByteBuffer }