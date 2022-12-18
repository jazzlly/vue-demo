"use strict";
var arrayBufferDemo;
(function (arrayBufferDemo) {
    // https://zh.javascript.info/arraybuffer-binary-arrays
    let buffer = new ArrayBuffer(16);
    // console.info(buffer.constructor.name);
    // console.info(Object.getPrototypeOf(buffer));
    // console.info(Object.getPrototypeOf(Object.getPrototypeOf(buffer)));
    // console.info(buffer.byteLength); // 16
    // 只能通过view来操作array buffer
    let byteView = new Uint8Array(buffer);
    // console.info(byteView.BYTES_PER_ELEMENT);   // 1
    // console.info(byteView.byteLength);      // 16
    // console.info(byteView.length);          // 16
    // console.info(byteView.byteOffset);      // 0
    for (let index = 0; index < byteView.length; index++) {
        byteView[index] = index;
    }
    // for (const e of byteView) {
    //     console.info(e);
    // }
    let shortView = new Uint16Array(byteView.subarray(1, 3));
    shortView[0] = 123;
    byteView = new Uint8Array(buffer);
    for (const e of byteView) {
        console.info(e);
    }
})(arrayBufferDemo || (arrayBufferDemo = {}));
