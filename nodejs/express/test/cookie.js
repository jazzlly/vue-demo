const { execSync } = require('child_process');

let stdout = execSync(
    `curl -s -k -X POST -d userName=pekall -d password=pekall1234 \
    https://192.168.11.32:4434/uni_auth/v1/login/loginIn`)
    
var resp = JSON.parse(stdout);

exports.loginId = resp.loginId