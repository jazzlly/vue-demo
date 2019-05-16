"use strict";

var _ = require('underscore')
var express = require('express');
var router = express.Router();
var util = require('util')

var uasService = require('../UasService')
var dbService = require('../DbService')

const {
    uasJettyUrl,
    formUrlEncoded,
    makeid,
    makeNum
} = require('../Config')

// 创建随机租户
router.get('/', async function (req, res) {
    const name = req.query.name
    const admin = 'uasadmin'
    console.log(`tenant name: ${name}`);

    try {
        res.send(await uasService.getTenantByNameWait(admin, name))
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal error!')
    }
})

// 同步创建租户
router.post('/sync', async function (req, res) {
    const admin = req.body.admin ? req.body.admin : 'uasadmin'
    const minParams = req.body.minParams

    try {
        if (minParams) {
            const random = makeid(40)
            let tenant = {
                name:`tenant-name-${random}`,
                account:`tenant-account-${random}`,
                mobilePhone:`1${makeNum(10)}`
            }
            res.send(await uasService.createTenantWait(admin, tenant))
        } else {
         res.send(await uasService.createRandomTenantWait(admin))
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal error!')
    }
})


module.exports.router = router;
