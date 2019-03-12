const util = require('util')
const fetch = require('node-fetch');


// 将promise作为函数参数

function foo(promise) {
    promise.then(value => {
        console.log(value);
    }).catch(reason => {
        console.log(reason);
    })
}

const p = new Promise((resolve, reject) => {
    resolve('hello promise!')
})

foo(p)

// Promise.resolve/reject将任何类型的value转化成promise!
foo(Promise.resolve('wahaha'))
foo(Promise.reject('kuchacha!'))