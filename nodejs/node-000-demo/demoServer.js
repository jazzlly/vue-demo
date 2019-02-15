var express = require('express');
var cors = require('cors');

var app = express();
app.use(express.json());

// config: https://www.npmjs.com/package/cors
app.use(cors({
  origin: 'http://localhost:8080',
  maxAge: 86400
}));

/*
// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // 在有效时间内，浏览器无须为同一请求再次发起预检请求
    res.setHeader('Access-Control-Max-Age', 86400);

    // Pass to next layer of middleware
    next();
});
*/

app.get('/', function (req, res) {
   res.send('Hello World');
})
 
app.post('/user', function (req, res) {
    console.log(req.body); // your JSON
    res.send({result: 0});
})

var server = app.listen(8888, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

// curl -i -d '{"MyKey":"My Value"}' -H "Content-Type: application/json" http://127.0.0.1:8888/user