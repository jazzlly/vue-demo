"use strict";

const uasUrl = 'https://uas.pekall.com:4434/uni_auth/v1'
const mdmAddr = 'https://mdm.pekall.com:4432'


const uasJettyUrl = 'http://uas.pekall.com:9500/uni_auth/v1'

const esAddrPort = 'es.pekall.com:9200'
const uasMysqlIp = 'mysql.uas.pekall.com'

var assert = require('assert')
var https = require('https')
var axios = require('axios')

/*全局默认配置*/
axios.defaults.timeout = 100000;
axios.defaults.withCredentials = true;
axios.defaults.retry = 0;
// axios.defaults.retryDelay = 1000;
// axios.defaults.headers['loading'] = true;

const formUrlEncoded = x =>
  Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')

const makeid =  function(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const makeNum =  function(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


exports.esAddrPort = esAddrPort
exports.uasMysqlIp = uasMysqlIp
exports.formUrlEncoded = formUrlEncoded
exports.uasUrl = uasUrl
exports.uasJettyUrl = uasJettyUrl
exports.makeid = makeid
exports.makeNum = makeNum

