const { execSync } = require('child_process')
const util = require('util')
const uasAddr = require('./conf').uasAddr
const mdmAddr = require('./conf').mdmAddr

function extractCookies(setCookies) {
    let sessions = []
    let cookies = setCookies.split('\r\n')
    cookies.forEach(cookie => {
        if(cookie) {
            // console.log(`cookie: ${cookie}`)
            sessions.push(cookie.split(':')[1].trim())
        }
    })
    return sessions.join(' ')
}

let stdout = execSync(
    `curl -s -k -X POST -d userName=pekall -d password=pekall1234 \
    ${uasAddr}/uni_auth/v1/login/loginIn`)
    
var resp = JSON.parse(stdout);
/*
{ errorCode: '0',
  description: '登陆成功',
  loginId: 'fe3ab488db21420b9d3ee024d6bf3e24' }
*/
console.log(`login resp: ${util.inspect(resp)}`)
const loginId = resp.loginId

stdout = execSync(
    `curl -s -k -G -X GET \
        -d serviceName=com.pekall.uniauth.webapp \
        -d loginId=${loginId} \
        ${uasAddr}/uni_auth/v1/login/ticket`)

console.log(`${stdout}`);
var respTicket = JSON.parse(stdout);
console.log(`ticket resp: ${util.inspect(respTicket)}`)
const uasTicket = respTicket.ticket

stdout = execSync(
    `curl -s -k -G -X GET \
        -d serviceName=com.pekall.mdm.webapp \
        -d loginId=${loginId} \
        ${uasAddr}/uni_auth/v1/login/ticket`)

console.log(`${stdout}`);
respTicket = JSON.parse(stdout);
console.log(`ticket resp: ${util.inspect(respTicket)}`)
const mdmTicket = respTicket.ticket

stdout = execSync(
    `curl -i -s -k -G -X GET \
        -H 'Authorization: ${uasTicket}' \
        ${uasAddr}/uni_auth/v1/enterprise_admin/login_user \
        | grep Set-Cookie`)
console.log(`${stdout}`);
// Set-Cookie: JSESSIONID=1wy8njo4bwdvi1p1xoc8xzfcry;Path=/uni_auth
const uasSessions = extractCookies(`${stdout}`)
console.log('uasSession:');
console.log(uasSessions);

stdout = execSync(
    `curl -i -s -k -G -X GET \
        -H 'Authorization: ${mdmTicket}' \
        ${mdmAddr}/mdm/v1/enterprise_admin/login_user \
        | grep Set-Cookie`)

const mdmSessions = extractCookies(`${stdout}`)
console.log('mdmSession:');
console.log(mdmSessions);

// exports.loginId = resp.loginId
exports.mdmSessions = mdmSessions
exports.uasSessions = uasSessions
