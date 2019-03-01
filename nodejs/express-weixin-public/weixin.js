var express = require('express');
var util = require('util')
var app = express();

const serverPort = 8888

app.get('/', function (req, res) {
    console.log(util.inspect(req.query));

    res.end(JSON.stringify(req.query));
})

app.get('/wx', function (req, res) {
    console.log("微信服务器配置接口，第一个接口");

    console.log(util.inspect(req.query));
    /* query:{ 
        signature: '6e6660066db5d3babd330b1f2f78520c7c266f57',
        echostr: '7527200594645921583',
        timestamp: '1551411753',
        nonce: '1314115573' 
    }*/
    res.end(req.query.echostr);
})

var server = app.listen(serverPort, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})



