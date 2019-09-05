let assert = require('assert')
let https = require('https')
let axios = require('axios')

const uasJettyUrl = 'http://uas.pekall.com:9500/uni_auth/v1'

/*全局默认配置*/
axios.defaults.timeout = 100000;
axios.defaults.withCredentials = true;
axios.defaults.retry = 0;

const formUrlEncoded = x =>
  Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')

/**
 * 根据account登录uas, 返回jsession id
 */
function uasLogin(account, password) {
  const uasAxios = axios.create({
    baseURL: uasJettyUrl,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  })

  uasAxios({
    method: "post",
    url: "/login/loginIn",
    data: formUrlEncoded({
      userName: account,
      password: password
    }),
    config: {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  }).then(function (resp) {
    console.log(resp.data);
    assert.equal(resp.status, 200)

    const loginId = resp.data.loginId;
    uasAxios({
      method: "get",
      url: "login/ticket",
      params: {
        serviceName: 'com.pekall.uniauth.webapp',
        loginId: loginId
      }
    }).then(function (ticketResp) {
      console.log(ticketResp.data);
      assert.equal(ticketResp.status, 200)

      uasAxios({
        method: "get",
        url: "/enterprise_admin/login_user",
        headers: {
          'Authorization': ticketResp.data.ticket
        }
      }).then(function (loginUserResp) {
        console.log(loginUserResp.data);
        assert.equal(loginUserResp.status, 200)
        console.log(loginUserResp.headers['set-cookie']);
      })
    })
  })
}

uasLogin("uasadmin", "pekall12#$")