"use strict";

var _ = require('underscore')
var express = require('express');
var router = express.Router();
var util = require('util')
var assert = require('assert');

var uasService = require('../UasService')
var dbService = require('../DbService')

const {
    makeid,
    makeNum
} = require('../Config')

router.get('/', async function (req, res) {
    try {
        await testMinParams()
        await testFull()
        res.send('test ok')
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal error!')
    }
})

async function testMinParams() {
    const admin = 'uasadmin'
    const random = makeid(40)
    let tenant = {
        name: `tenant-name-${random}`,
        account: `tenant-account-${random}`,
        mobilePhone: `1${makeNum(10)}`
    }
    const retTenant = await uasService.createTenantWait(admin, tenant)
    assert.equal(tenant.name, retTenant.name)
    assert.equal(tenant.account, retTenant.account)
    assert.equal(tenant.mobilePhone, retTenant.mobilePhone)

    const queryTeant = await uasService.getTenantByNameWait(admin, tenant.name)
    assert.equal(tenant.name, queryTeant.name)
    assert.equal(tenant.account, queryTeant.account)
    assert.equal(tenant.mobilePhone, queryTeant.mobilePhone)
    assert.equal(queryTeant.status, 0)
    assert.equal(queryTeant.mail, '')
    assert.equal(queryTeant.industry, '')
    assert.equal(queryTeant.creator, '')
    assert.equal(queryTeant.tenantOrgCode, '')
    assert.equal(queryTeant.remark, '')

    console.log('testMinParams ok!')
}

async function testFull() {
    const admin = 'uasadmin'
    const random = makeid(40)
    let tenant = {
        name:`tenant-name-${random}`,
        account:`tenant-account-${random}`,
        mobilePhone:`1${makeNum(10)}`,
        status: 0,
        mail: `mail-${random}`,
        industry: `industry-${random}`,
        creator: `creator-${random}`,
        tenantOrgCode: `tenant-code-${random}`,
        remark: `remark-${random}`,
    }

    const retTenant = await uasService.createTenantWait(admin, tenant)
    assert.equal(tenant.name, retTenant.name)
    assert.equal(tenant.account, retTenant.account)
    assert.equal(tenant.mobilePhone, retTenant.mobilePhone)

    const queryTeant = await uasService.getTenantByNameWait(admin, tenant.name)
    var result = _.isEqual(
        _.omit(queryTeant, ['id', 'createTime', 'updateTime']),
        _.omit(tenant, ['id', 'createTime', 'updateTime'])
    );

    assert.equal(result, true)

    console.log('testFull ok!')
}

module.exports.router = router;
