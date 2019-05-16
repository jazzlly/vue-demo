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


router.get('/', function (req, res) {
    res.send('Get all users.');
});

router.post('/', function (req, res) {
    // Create user
    res.send('Some response.');
});

module.exports.router = router;
