"use strict";

var _ = require('underscore')
var express = require('express');
var router = express.Router();
var util = require('util')

var uasService = require('./UasService')
var dbService = require('./DbService')

const {
    uasJettyUrl,
    formUrlEncoded,
    makeid,
    makeNum
} = require('./Config')

router.get('/', async function (req, res) {
    const account = req.query.account
    console.log(`account id: ${account}`);

    try {
        await uasService.loginUas(account)
        res.send('login ok')
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal error!')
    }
})

module.exports.router = router;
