namespace arrayBufferDemo {

    // https://zh.javascript.info/arraybuffer-binary-arrays

    let buffer = new ArrayBuffer(16)
    let dataView = new DataView(buffer)

    dataView.setUint8(0, 0xff)
    dataView.setUint16(1, 0x1234)

    for (let index = 0; index < dataView.byteLength; index++) {
        console.info(`${dataView.getUint8(index).toString(16)}`);
    }

    let base64 = btoa(
        new Uint8Array(buffer, 0, 3)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
    console.info(base64);
}