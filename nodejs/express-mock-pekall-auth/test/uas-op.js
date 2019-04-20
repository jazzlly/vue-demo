// console.log('uas admin test blank!');
// var assert = require('assert')
// var https = require('https')
// var axios = require('axios')

// /*全局默认配置*/
// axios.defaults.timeout = 2000;
// axios.defaults.withCredentials = true;
// axios.defaults.retry = 1;
// axios.defaults.retryDelay = 1000;
// axios.defaults.headers['loading'] = true;

// const formUrlEncoded = x =>
//   Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')

// const uasAxios = axios.create({
//   baseURL: "https://192.168.11.32:4434/uni_auth/v1",
//   httpsAgent: new https.Agent({
//     rejectUnauthorized: false
//   })
// })

// describe.skip('uas admin login', function () {
//   describe('#uas login, get token', function () {
//     it('should login ok, get token ok', async function () {
//       const resp = await uasAxios({
//         method: "post",
//         url: "/login/loginIn",
//         data: formUrlEncoded({
//           userName: 'uasadmin',
//           password: 'pekall12#$'
//         }),
//         config: {
//           headers: {
//             "Content-Type": "multipart/form-data"
//           }
//         }
//       })
      
//       // console.log(resp);
//       console.log(resp.data);
//       assert.equal(resp.status, 200)
    
//       const loginId = resp.data.loginId;
//       const ticketResp = await uasAxios({
//         method: "get",
//         url: "login/ticket",
//         params: {
//           serviceName: 'com.pekall.uniauth.webapp',
//           loginId: loginId
//         }
//       })
//       console.log(ticketResp.data);
//       assert.equal(ticketResp.status, 200)

//       const loginUserResp = await uasAxios({
//         method: "get",
//         url: "/enterprise_admin/login_user",
//         headers: {'Authorization': ticketResp.data.ticket}
//       })
//       console.log(loginUserResp.data);
//       assert.equal(loginUserResp.status, 200)
//       assert.equal(loginUserResp.data.account, 'uasadmin')
//     });
//   });
// });