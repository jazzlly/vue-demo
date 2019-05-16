"use strict";

// TODO: 处理异常
var util = require('util')
var mysql = require('mysql');
const mysqlHost = require('./Config').uasMysqlIp

var connection = mysql.createConnection({
  host     : mysqlHost,
  user     : 'root',
  password : 'pekall1234',
  database : 'uni_auth'
});

connection.connect();

/*
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
*/

var DbService = function() {}

DbService.prototype.getTenantByName = function (name) {
  connection.query(`
    SELECT id, name, account, mobile_phone, status, mail, industry, 
      creator, create_time, update_time, tenant_org_code, remark FROM tenant
      where name = '${name}'`, 
        function (error, results) {
    if (error) throw error;
    // console.log(util.inspect(fields));
    // console.log(util.inspect(results[0]));

    results.forEach(row => {
      console.log('Get row:');
      console.log(util.inspect(row));
    })
  });
}

module.exports = new DbService()