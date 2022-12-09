namespace binaryDemo {


    function doubleToByteArray(num: number) {
        var buffer = new ArrayBuffer(8);         // JS numbers are 8 bytes long, or 64 bits
        var longNum = new Float64Array(buffer);  // so equivalent to Float64
    
        longNum[0] = num;
    
        // return Array.from(new Int8Array(buffer)).reverse();  // reverse to get little endian
        return Array.from(new Int8Array(buffer)).reverse();
    }

    console.info(doubleToByteArray(3.1415926))

    function stringToArrayBuffer(str:string) {
        return new TextEncoder().encode(str);
        /*
        var uint8array = new TextEncoder("utf-8").encode("Plain Text");
        var string = new TextDecoder().decode(uint8array);
        console.log(uint8array ,string )
        */
    }

    console.info(stringToArrayBuffer("你好哈哈哈hello!"))
}

