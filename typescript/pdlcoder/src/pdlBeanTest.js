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
const _ = __importStar(require("lodash"));
const pdlCoderTest_1 = require("./pdlCoderTest");
function testInterfaceCast() {
    const bean = pdlCoderTest_1.objPolicyBean;
    if (!_.isEqual(bean.flowNumber, '044abcc4b0684c72a5fbe2325a429b18')) {
        throw 'flowNumber is not equal!';
    }
    if (!_.isEqual(bean.signature, 'a9YGWCcTgtvuQ/L9LihZ7S0miKU2TlGw1GtPkbTkcwBaHwTRNeqVzW6Z8Fi5plpDdG5lKtjwwsMCMV8XF70lQ8Sq1FD6eKoKH5X/zElPuZrTn5+yokr97+Ib52S0yjAtMTBtA2AY0ZyLKVFl2Db6wKM9uNWmtNMsyi/IAE4KkQI=')) {
        throw 'signature not equal!';
    }
    if (!_.isEqual(bean.policyInfoBean.policyId, 'ff8080818482df2801848352ec7a0000')) {
        throw 'policyInfoBean.policyId not equal';
    }
    if (bean.fences.length !== 1) {
        throw 'fences array length wrong';
    }
    if (bean.fences[0].fenceDefinition[0].ruleType !== 6001) {
        throw 'bean.fences[0].fenceDefinition[0].ruleType !== 6001';
    }
    if (bean.rules[0].ruleDefinition[0].value.ruleType !== 5001) {
        throw 'bean.rules[0].ruleDefinition[0].value.ruleType !== 5001';
    }
    console.info('interface cast pass!');
}
testInterfaceCast();
