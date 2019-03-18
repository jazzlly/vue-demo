// async function 返回promise
// await function 返回resolve的参数

// async function 总是返回一个promise
async function foo() {
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

(async function() {
    console.log('in single thread');
    const msg1 = await foo()
    console.log('msg1: ' + msg1);

    const msg2 = await bar()
    console.log('msg2: ' + msg2);
})();

(async function() {
    console.log('in parall 1:');
    const p1 = foo()
    const p2 = bar()
    // p1, p2并发开始了！
    const m1 = await p1
    const m2 = await p2

    console.log('msg1: ' + m1);
    console.log('msg2: ' + m2);
})();

(async function() {
    console.log('in parall 2:');
    const p1 = foo()
    const p2 = bar()
    // p1, p2并发开始了！
    
    const [m1, m2] = [await p1, await p2]
    console.log('msg1: ' + m1);
    console.log('msg2: ' + m2);
})();

