"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const smc = __importStar(require("sm-crypto"));
const PDL_SEC_KEY = "Sonicom.com.cn11";
const HEX_PDL_SEC_KEY = "536f6e69636f6d2e636f6d2e636e3131";
const MESSAGE = "你好sm4哈哈哈";
const HEX_ENC_MESSAGE_FROM_JAVA = '106fdd925cae4e9012c749ba8a079ade42e802fef044bb00fb67e1d1e8c27b1b';
const HEX_DIGEST_MESSAGE_FROM_JAVA = '8a2f72033091fd108ab55996786eb23249bdb8a46eb504d7cf9116751a217681';
function testSm4EncDec() {
    const hexEncString = smc.sm4.encrypt(MESSAGE, HEX_PDL_SEC_KEY);
    if (hexEncString !== HEX_ENC_MESSAGE_FROM_JAVA) {
        throw 'hex encrypted string not equal to which from java!';
    }
    let decString = smc.sm4.decrypt(hexEncString, HEX_PDL_SEC_KEY);
    if (decString !== MESSAGE) {
        throw 'decrypted string not equal to original string';
    }
    console.info(decString);
    console.info('test done!');
}
function testSm3() {
    let digest = smc.sm3(MESSAGE);
    if (digest !== HEX_DIGEST_MESSAGE_FROM_JAVA) {
        throw 'digest not same';
    }
    console.info(digest);
}
testSm4EncDec();
testSm3();
