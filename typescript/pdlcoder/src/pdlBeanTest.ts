import * as PdlBeans from "./pdlBeansPolicyBean";

import * as PdlCoder from "./pdlCoder";
import { ByteBuffer } from "./ByteBuffer"
import { assertEncodeThenDecode} from './PdlCoderUnitTest'
import * as _ from 'lodash';

import {objPolicyBean} from './pdlCoderTest'

function testInterfaceCast() {
    const bean: PdlBeans.PolicyBean = objPolicyBean as PdlBeans.PolicyBean

    if (!_.isEqual(bean.flowNumber, '044abcc4b0684c72a5fbe2325a429b18')) {
        throw 'flowNumber is not equal!'
    }

    if (!_.isEqual(bean.signature, 'a9YGWCcTgtvuQ/L9LihZ7S0miKU2TlGw1GtPkbTkcwBaHwTRNeqVzW6Z8Fi5plpDdG5lKtjwwsMCMV8XF70lQ8Sq1FD6eKoKH5X/zElPuZrTn5+yokr97+Ib52S0yjAtMTBtA2AY0ZyLKVFl2Db6wKM9uNWmtNMsyi/IAE4KkQI=')) {
        throw 'signature not equal!'
    }

    if (!_.isEqual(bean.policyInfoBean.policyId, 'ff8080818482df2801848352ec7a0000')) {
        throw 'policyInfoBean.policyId not equal'
    }
    
    if (bean.fences.length !== 1) {
        throw 'fences array length wrong'
    }

    if (bean.fences[0].fenceDefinition[0].ruleType !== 6001) {
        throw 'bean.fences[0].fenceDefinition[0].ruleType !== 6001'
    }

    if (bean.rules[0].ruleDefinition[0].value.ruleType !== 5001) {
        throw 'bean.rules[0].ruleDefinition[0].value.ruleType !== 5001'
    }

    console.info('interface cast pass!');
}

testInterfaceCast()