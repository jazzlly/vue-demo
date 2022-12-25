import * as smc from 'sm-crypto';

const PDL_SEC_KEY: string = "Sonicom.com.cn11";
const HEX_PDL_SEC_KEY: string = "536f6e69636f6d2e636f6d2e636e3131";

const MESSAGE: string = "你好sm4哈哈哈";
const HEX_ENC_MESSAGE_FROM_JAVA: string = '106fdd925cae4e9012c749ba8a079ade42e802fef044bb00fb67e1d1e8c27b1b'

const HEX_DIGEST_MESSAGE_FROM_JAVA: string = '8a2f72033091fd108ab55996786eb23249bdb8a46eb504d7cf9116751a217681'

function testSm4EncDec() {
    const hexEncString: string = smc.sm4.encrypt(MESSAGE, HEX_PDL_SEC_KEY)
    if (hexEncString !== HEX_ENC_MESSAGE_FROM_JAVA) {
        throw 'hex encrypted string not equal to which from java!'
    }

    let decString: string = smc.sm4.decrypt(hexEncString, HEX_PDL_SEC_KEY)
    if (decString !== MESSAGE) {
        throw 'decrypted string not equal to original string'
    }
    console.info(decString)
    console.info('test done!');
}

function testSm3() {
    let digest = smc.sm3(MESSAGE)
    if (digest !== HEX_DIGEST_MESSAGE_FROM_JAVA) {
        throw 'digest not same'
    }
    console.info(digest);
}

testSm4EncDec()
testSm3()