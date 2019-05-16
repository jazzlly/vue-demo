
"use strict";

let assert = require('assert')
let https = require('https')
let axios = require('axios')

const {
  uasJettyUrl,
  formUrlEncoded,
  makeid,
  makeNum
} = require('./Config')


/* key: account, value: password */
const accountPasswordMap = new Map()
const adminAxiosMap = new Map()

accountPasswordMap.set('uasadmin', 'pekall12#$')
accountPasswordMap.set('pekall', 'pekall1234')

var UasService = function() {}

/**
 * 根据account登录uas, 返回jsession id
 */
UasService.prototype.loginUas = async function(account) {
  const uasAxios = axios.create({
    baseURL: uasJettyUrl,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  })

  const resp = await uasAxios({
    method: "post",
    url: "/login/loginIn",
    data: formUrlEncoded({
      userName: account,
      password: accountPasswordMap.get(account)
    }),
    config: {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  })
  
  console.log(resp.data);
  assert.equal(resp.status, 200)

  const loginId = resp.data.loginId;
  const ticketResp = await uasAxios({
    method: "get",
    url: "login/ticket",
    params: {
      serviceName: 'com.pekall.uniauth.webapp',
      loginId: loginId
    }
  })
  console.log(ticketResp.data);
  assert.equal(ticketResp.status, 200)

  const loginUserResp = await uasAxios({
    method: "get",
    url: "/enterprise_admin/login_user",
    headers: {'Authorization': ticketResp.data.ticket}
  })
  console.log(loginUserResp.data);
  assert.equal(loginUserResp.status, 200)
  console.log(loginUserResp.headers['set-cookie']);

  uasAxios.defaults.headers['Cookie'] = 
    loginUserResp.headers['set-cookie'][0] + " " +
    loginUserResp.headers['set-cookie'][1]
  adminAxiosMap.set(account, uasAxios)
}

UasService.prototype.topOrg = async function(account) {
  let uasAxiosLogin = adminAxiosMap.get(account)
  const topOrgResp = await uasAxiosLogin({
    url: '/orgs/top',
  })
  console.log(topOrgResp.data);
  assert.equal(topOrgResp.status, 200)

  return topOrgResp.data
}

UasService.prototype.sleep = function(account, millis) {
  console.log('begin sleep ...');
  let uasAxiosLogin = adminAxiosMap.get(account)
  const resp = uasAxiosLogin({
      method: "get",
      url: "/test/sleep",
      params: {
        millis: millis
      }})
      .then(function (response) {
        console.log('done sleep!');
        console.log(response.data);
        assert.equal(response.status, 200)
      });
}

UasService.prototype.createRandomUser = function(admin) {
  console.log('begin create user ...');
  let uasAxios = adminAxiosMap.get(admin)
  const random = makeid(40)
  let user = {
    account:`account-${random}`,
    name:`name-${random}`,
    mobilePhone:`1${makeNum(10)}`,
    orgCode:"911257725d3e11e6a468ec55f9c7f785",
    idNum: `${makeNum(18)}`,
    sex:"",
    position:"",
    officePhone:"",
    password:"pekall1234",
    level:""
  }
  
  uasAxios.post("/enterprise_users", user)
    .then(function (response) {
      console.log('done create user!');
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

UasService.prototype.createRandomOrg = function(admin) {
  console.log('begin create org ...');
  let uasAxios = adminAxiosMap.get(admin)
  const random = makeid(40)
  
  uasAxios({
      method: "post",
      url: "/orgs",
      params: {
        parentOrgId: '911257725d3e11e6a468ec55f9c7f785',
        name: `org-${random}`,
        abbreviation: `org-abv-${random}`,
        linkmanName: '',
        linkmanPhone: '',
        orgRealCode: `code-${random}`,
        remark: ''
      }})
    .then(function (response) {
      console.log('done create org!');
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

UasService.prototype.createRandomOrgWait = async function(admin) {
  console.log('begin create org ...');
  let uasAxios = adminAxiosMap.get(admin)
  const random = makeid(40)
  
  const response = await uasAxios({
      method: "post",
      url: "/orgs",
      params: {
        parentOrgId: '911257725d3e11e6a468ec55f9c7f785',
        name: `org-${random}`,
        abbreviation: `org-abv-${random}`,
        linkmanName: '',
        linkmanPhone: '',
        orgRealCode: `code-${random}`,
        remark: ''
      }})
    console.log('create org await: ');
    console.log(response.data);
    
    return response.data
}

UasService.prototype.createRandomTenantWait = async function(admin) {
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

  return await this.createTenantWait(admin, tenant)
}

UasService.prototype.createTenantWait = async function(admin, tenant) {
  console.log('begin create tenant ...');
  let uasAxios = adminAxiosMap.get(admin)
  const response = await uasAxios.post("/tenant", tenant)
  console.log('done create tenant!');
  console.log(response.data);

  return response.data
}

UasService.prototype.getTenantByNameWait = async function(admin, name) {
  let uasAxios = adminAxiosMap.get(admin)
  const response = await uasAxios({
    method: "get",
    url: "/tenant",
    params: {
      name: name
    }})
  console.log(response.data);
  return response.data
}

module.exports = new UasService()