"use strict";

// TODO: 处理异常

var _ = require('underscore')
var express = require('express');
var util = require('util')
var app = express();

const serverPort = 9100

app.post('/auth/v1/login', async function (req, res) {
    res.cookie('JSESSIONID', '123456', { maxAge: 900000, httpOnly: true });
    return res.send('ok');
})

app.post('/auth/v1/logout', async function (req, res) {
    return res.json({});
})

app.get('/auth/v1/internal/get_user', async function (req, res) {
    /*
    private String id;
    private String username;
    private String password;
    private String domain = "";
    private Integer status = 51001;
    private String name = "";
    */
    return res.json({ 
        id: 'user_000000000000000000000000001',
        username: '3::pekall@pekall.com',
        status: 51001

    })
    return res.send('ok');
})

app.get('/license_client_service/v1/licenses/get_import_status', function(req, res) {
    return res.json({
        status: 0
    })
})

var server = app.listen(serverPort, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})


