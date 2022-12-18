/**
 * ByteBuffer like netty ByteBuf
 */
class ByteBuffer {

    writerIndex: number
    readerIndex: number
    capability: number
    writerMark: number
    buffer: ArrayBuffer
    dataview: DataView
    encoder: TextEncoder

    constructor(
        writerIndex: number = 0, 
        readerIndex: number = 0,
        capability: number = 128,
        writerMark: number = 0
        ) {
            this.writerIndex = writerIndex
            this.readerIndex = readerIndex
            this.capability = capability
            this.writerMark = writerMark
            this.buffer = new ArrayBuffer(capability)
            this.dataview = new DataView(this.buffer)
            this.encoder =  new TextEncoder()
    }

    writeByte(aByte: number) {
        this.tryExpand(1)

        this.dataview.setUint8(this.writerIndex, aByte)
        this.writerIndex++
    }
    
    writeShort(aShort: number) {
        this.tryExpand(2)
        
        this.dataview.setUint16(this.writerIndex, aShort)
        this.writerIndex += 2
    }

    writeInt(anInt: number) {
        this.tryExpand(4)
        
        this.dataview.setUint32(this.writerIndex, anInt)
        this.writerIndex += 4
    }

    writeDouble(aDouble: number) {
        this.tryExpand(8)
        
        this.dataview.setFloat64(this.writerIndex, aDouble)
        this.writerIndex += 8
    }

    writeBytes(bytes: Uint8Array) {
        this.tryExpand(bytes.byteLength)

        for (let index = 0; index < bytes.byteLength; index++) {
            this.dataview.setUint8(this.writerIndex + index, bytes[index])            
        }

        this.writerIndex += bytes.byteLength
    }

    writeString(aStr: string) {
        this.writeBytes(this.encoder.encode(aStr))
    }

    base64String() : string {
        const base64 = btoa(
            new Uint8Array(this.buffer, 0, this.writerIndex)
              .reduce((data, byte) => data + String.fromCharCode(byte), '')
          );
        return base64;
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

    readNumber() :number {
        throw 'todo'
    }
    
    setInt(int: number, index: number) {
        throw 'todo'
    }

    readableBytes(): number {
        throw 'todo'
    }

    tryExpand(byteLen: number) {
        // todo:
        console.info("try expand, todo ...");
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