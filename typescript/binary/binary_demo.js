"use strict";
var binaryDemo;
(function (binaryDemo) {
    function doubleToByteArray(num) {
        var buffer = new ArrayBuffer(8); // JS numbers are 8 bytes long, or 64 bits
        var longNum = new Float64Array(buffer); // so equivalent to Float64
        longNum[0] = num;
        // return Array.from(new Int8Array(buffer)).reverse();  // reverse to get little endian
        return Array.from(new Uint8Array(buffer)).reverse();
    }
    function doubleToByteArray2(num) {
        var buffer = new ArrayBuffer(16); // JS numbers are 8 bytes long, or 64 bits
        // var longNum = new Float64Array(buffer);  // so equivalent to Float64
        // longNum[0] = num;
        let dataview = new DataView(buffer, 0);
        dataview.setFloat64(3, num);
        return Array.from(new Uint8Array(buffer)); // reverse to get little endian
        // return Array.from(new Int8Array(buffer)).reverse();
    }
    console.info(doubleToByteArray(3.1415926));
    console.info(doubleToByteArray2(3.1415926));
    function stringToArrayBuffer(str) {
        return new TextEncoder().encode(str);
        /*
        var uint8array = new TextEncoder("utf-8").encode("Plain Text");
        var string = new TextDecoder().decode(uint8array);
        console.log(uint8array ,string )
        */
    }
    // console.info(stringToArrayBuffer("你好哈哈哈hello!"))
})(binaryDemo || (binaryDemo = {}));
