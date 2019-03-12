const util = require('util')
const fetch = require('node-fetch');

fetch('https://github.com/')
    .then(res => res.text())
    .then(body => console.log(body));


fetch('http://www.omdbapi.com/?s=batman&year=201&apikey=59d97a06')
    .then(resp => {
        return resp.json()
    }).then(data => {
        console.log(data);
    })