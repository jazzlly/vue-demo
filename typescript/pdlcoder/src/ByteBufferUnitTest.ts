import {ByteBuffer} from './ByteBuffer';


const buffer : ByteBuffer = new ByteBuffer()

function testWriteByteBoundaryLow() {
    try {
        buffer.writeByte(-1)
    } catch (error) {
        if (error !== 'pdl buffer error: write byte, out of boundary!') {
            throw 'test failed!'
        }
        return
    }
    
    throw 'test failed!'
}

function testWriteByteBoundaryHigh() {
    try {
        buffer.writeByte(256)
    } catch (error) {
        if (error !== 'pdl buffer error: write byte, out of boundary!') {
            throw 'test failed!'
        }
        return
    }
    
    throw 'test failed!'
}

function testWriteShortBoundaryLow() {
    try {
        buffer.writeShort(-1)
    } catch (error) {
        if (error !== 'pdl buffer error: write short, out of boundary!') {
            throw 'test failed!'
        }
        return
    }
    
    throw 'test failed!'
}

function testWriteShortBoundaryHigh() {
    try {
        buffer.writeShort(1<<16)
    } catch (error) {
        if (error !== 'pdl buffer error: write short, out of boundary!') {
            throw 'test failed!'
        }
        return
    }
    
    throw 'test failed!'
}

function testWriteIntBoundaryLow() {
    try {
        buffer.writeInt(-1)
    } catch (error) {
        if (error !== 'pdl buffer error: write int, out of boundary!') {
            throw 'test failed!'
        }
        return
    }
    
    throw 'test failed!'
}

function testWriteIntBoundaryHigh() {
    try {
        buffer.writeInt(1 << 32)
    } catch (error) {
        if (error !== 'pdl buffer error: write int, out of boundary!') {
            throw 'test failed!'
        }
        return
    }
    
    throw 'test failed!'
}

testWriteByteBoundaryLow()
testWriteByteBoundaryHigh()
testWriteShortBoundaryLow()
testWriteShortBoundaryHigh()
testWriteIntBoundaryLow()
testWriteIntBoundaryHigh()