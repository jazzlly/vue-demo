"use strict";

var _ = require('underscore')
var express = require('express');
var util = require('util')

var app = express();
app.use(express.json())
app.use(express.urlencoded())

app.use('/user', require('./UserController').router);
app.use('/uas/login', require('./LoginController').router);
app.use('/uas/tenant', require('./controller/TenantController').router);
app.use('/uas/test/tenant', require('./controller/TenantTestApi').router);

var uasService = require('./UasService')
var dbService = require('./DbService')

const {
    uasJettyUrl,
    formUrlEncoded,
    makeid,
    makeNum
  } = require('./Config')
  
app.get('/uas/org/top_org', async function (req, res) {
    const account = req.query.account
    console.log(`account id: ${account}`);

    try {
        res.send(await uasService.topOrg(account))
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal error!')
    }
})

// 创建随机机构
app.post('/uas/org', async function (req, res) {
    // const admin = req.body.admin ? req.body.admin : 'uasadmin'
    const admin = 'uasadmin'
    const sync = req.body.sync ? req.body.sync : 'false'
    try {
        if (sync === 'false') {
            uasService.createRandomOrg(admin)
            res.send("create org request submitted!")
        } else {
            res.send(await uasService.createRandomOrgWait(admin))
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal error!')
    }
})


// 创建随机用户
app.post('/uas/user', async function (req, res) {
    const admin = req.body.admin ? req.body.admin : 'uasadmin'
    try {
        uasService.createRandomUser(admin)
        res.send("create user request submitted!")
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal error!')
    }
})


// 同步创建机构
app.post('/uas/sync/org', async function (req, res) {
    // const admin = req.body.admin ? req.body.admin : 'uasadmin'
    const admin = 'uasadmin'
    try {
            res.send(await uasService.createRandomOrgWait(admin))
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal error!')
    }
})


const serverPort = 8888
var server = app.listen(serverPort, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
