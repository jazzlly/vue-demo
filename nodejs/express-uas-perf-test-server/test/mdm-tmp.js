var assert = require('assert')
var assert = require('assert')
var https = require('https')
var axios = require('axios')
var util = require('util')

var admin = require('./admin').mdmAxiosLogin

/*全局默认配置*/
axios.defaults.timeout = 2000;
axios.defaults.withCredentials = true;
axios.defaults.retry = 0;
axios.defaults.retryDelay = 1000;
axios.defaults.headers['loading'] = true;

const formUrlEncoded = x =>
  Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')

var uasAxios = axios.create({
  baseURL: "https://192.168.11.32:4434/uni_auth/v1",
  // withCredentials: true,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})

var mdmAxios = null
var mdmAxiosLogin = null

describe("# mdm admin test", function () {
  describe("## get top org", function () {
    it('should login ok, get token ok', async function () {
      {
        const resp = await uasAxios({
          method: "post",
          url: "/login/loginIn",
          data: formUrlEncoded({
            userName: 'pekall',
            password: 'pekall1234'
          }),
          config: {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        })

        // console.log(resp);
        // console.log(resp.data);
        assert.equal(resp.status, 200)

        const loginId = resp.data.loginId;
        const ticketResp = await uasAxios({
          method: "get",
          url: "login/ticket",
          params: {
            serviceName: 'com.pekall.mdm.webapp',
            loginId: loginId
          }
        })
        // console.log(ticketResp.data);
        assert.equal(ticketResp.status, 200)

        mdmAxios = axios.create({
          baseURL: "https://192.168.11.33:4432/mdm/v1/",
          withCredentials: true,
          httpsAgent: new https.Agent({
            rejectUnauthorized: false
          }),
        })

        const loginUserResp = await mdmAxios({
          method: "get",
          url: "/enterprise_admin/login_user",
          headers: {
            'Authorization': ticketResp.data.ticket
          },
        })

        console.log(loginUserResp.headers['set-cookie']);
        assert.equal(loginUserResp.status, 200)
        assert.equal(loginUserResp.data.account, 'pekall')

        mdmAxiosLogin = axios.create({
          baseURL: "https://192.168.11.33:4432/mdm/v1/",
          withCredentials: true,
          headers: {
            Cookie: loginUserResp.headers['set-cookie'][0] + " " +
              loginUserResp.headers['set-cookie'][1]
          },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false
          }),
        })

        const topOrgResp = await mdmAxiosLogin({
          url: '/orgs/top',
        })

        // console.log(topOrgResp.data);
        assert.equal(topOrgResp.status, 200)
        console.log('Admin init done!');
      }

      const topOrgResp = await mdmAxiosLogin({
        url: '/orgs/top',
      })
      // console.log(topOrgResp.data);
      assert.equal(topOrgResp.status, 200)
    })
  })
})