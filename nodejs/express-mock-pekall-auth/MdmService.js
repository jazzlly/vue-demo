"use strict";

// TODO: 处理异常
var mysql = require('mysql');
const mysqlHost = require('./Config').mdmMysqlIp

var connection = mysql.createConnection({
  host     : mysqlHost,
  user     : 'root',
  password : 'pekall1234',
  database : 'mdm_reactor'
});

connection.connect();

/* key: orgId, value: defCodeReal */
const orgIdMap = new Map()

/* key: orgCode, value: defCodeReal */
const orgCodeMap = new Map()

connection.query('select id, org_code_real, def_code_real from mdm_org', 
        function (error, results) {
    if (error) throw error;

    // console.log(util.inspect(fields));
    // console.log(util.inspect(results[0]));

    results.forEach(row => {
      orgIdMap.set(row.id, row.def_code_real)
      orgCodeMap.set(row.org_code_real, row.def_code_real)
    })
    
    console.log(`org count: ${orgIdMap.size}`)
    console.log("Read mysql org data done!");
});

/* key: account, value: org id of user */
const userAccountMap = new Map()

// 查询用户数据：
connection.query('select account, org_code from mdm_user', 
        function (error, results) {
    if (error) throw error;

    results.forEach(row => {
      userAccountMap.set(row.account, row.org_code)
    })
    console.log(`user count: ${userAccountMap.size}`)
    console.log("Read mysql user data done!");
});

var MdmService = function() {}

MdmService.prototype.defCodeByOrgId = (orgId) => {
    return orgIdMap.get(orgId)
}

MdmService.prototype.defCodeByOrgCode = (orgCode) => {
    return orgCodeMap.get(orgCode)
}

MdmService.prototype.defCodeByAccount = (account) => {
    const orgId = userAccountMap.get(account)
    return orgIdMap.get(orgId)
}

module.exports = new MdmService()