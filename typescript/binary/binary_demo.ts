namespace binaryDemo {


    function doubleToByteArray(num: number) {
        var buffer = new ArrayBuffer(8);         // JS numbers are 8 bytes long, or 64 bits
        var longNum = new Float64Array(buffer);  // so equivalent to Float64
    
        longNum[0] = num;
    
        // return Array.from(new Int8Array(buffer)).reverse();  // reverse to get little endian
        return Array.from(new Int8Array(buffer)).reverse();
    }

    console.info(doubleToByteArray(3.1415926))
}