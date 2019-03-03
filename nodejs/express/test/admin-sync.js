

var request = require('sync-request');
var https = require('https')

const formUrlEncoded = x =>
    Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')

var res = request('POST',
    'http://192.168.11.32:9500/uni_auth/v1/login/loginIn',
    {
        // body: formUrlEncoded({
        //     userName: 'pekall',
        //     password: 'pekall1234'
        // }),
        body: 'userName=uasadmin&password=pekall12#$'
    }
);

console.log(res.getBody());