var express = require('express');
var cors = require('cors');
const { check, validationResult } = require('express-validator/check');

var app = express();
app.use(express.json());

// config: https://www.npmjs.com/package/cors
app.use(cors({
  origin: 'http://localhost:8080',
  maxAge: 86400
}));



app.get('/', function (req, res) {
   res.send('Hello World');
})

// get user by email
app.get('/user', [
  check('email').isEmail(),
], function (req, res) {
  console.log('get user query: ' + req.query.email);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  res.send(userMap.get(req.query.email));
})

// get all users
app.get('/users', function (req, res) {
  res.send(Array.from(userMap.values));
})

const userMap = new Map();
 
app.post('/user', function (req, res) {
    console.log(req.body); // your JSON
    userMap.set(req.body.email, req.body)

    res.send({result: 0});
})

var server = app.listen(8888, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

// curl -i -d '{"MyKey":"My Value"}' -H "Content-Type: application/json" http://127.0.0.1:8888/user