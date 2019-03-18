const fetch = require('node-fetch');

// async function 返回promise
// await function 返回resolve的参数

// async function 总是返回一个promise
async function func() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('timeout!');
            resolve('foo')
        }, 1000)
    })
}

async function bar() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('timeout!');
            resolve('bar')
        }, 1000)
    })
}

// await只有个在async函数中才能被调用
async function kaka() {
    console.log('enter kaka!');

    // await func().then(function (msg) {
    //     console.log(`resolve() get : ${msg}`);
    // })

    // await返回的就是resolve函数得到的参数
    const message = await func()

    console.log(`await() return ${message}`);
    console.log('kaka done!');
}

console.log('before kaka...');
kaka()
console.log('after kaka!');

(async function () {
    // await返回的就是resolve函数得到的参数
    const message = await func()
    console.log(`anonymous async function return : ${message}`);
})(); // 这一行要有分号！
// 这里上一行要有分号！
(async function () {

    // handle exception in await
    try {
        const resp = await fetch('http://fooxx.bar')
        console.log(`${resp}`);
    } catch (e) {
        console.log('get error: ' + e)
    }
})();

const xx = async function () {
    // handle exception in await
    const resp = await fetch('http://fooxx.bar')
    console.log(`${resp}`);
}

// async function return promise!
xx().catch((e) => {
    console.log("error: " + e);
});

(async function() {
    console.log('in single thread');
    const msg1 = await func()
    console.log('msg1: ' + msg1);

    const msg2 = await bar()
    console.log('msg2: ' + msg2);
})();

(async function() {
    console.log('in parall 1:');
    const p1 = func()
    const p2 = bar()
    // p1, p2并发开始了！
    const m1 = await p1
    const m2 = await p2

    console.log('msg1: ' + m1);
    console.log('msg2: ' + m2);
})();

(async function() {
    console.log('in parall 2:');
    const p1 = func()
    const p2 = bar()
    // p1, p2并发开始了！
    
    const [m1, m2] = [await p1, await p2]
    console.log('msg1: ' + m1);
    console.log('msg2: ' + m2);
})();

