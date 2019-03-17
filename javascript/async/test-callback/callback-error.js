// error in async function
// 由于异步函数的执行，已经不再主函数的execution stack中了，
// 所以主函数无法catch到异常

// !error first pattern, 
// callback的第一个参数为error
function foo(num, callback) {
    setTimeout(() => {
        if (typeof num !== 'number') {
            callback(new Error('Argument of type number is excepted!'));
            return;
        }
        const result = num * num
        callback(null, result)
    }, 1000)
}


function calcSquarePromise(num) {
    return new Promise(function (resolve, error) {
        setTimeout(() => {
            if (typeof num !== 'number') {
                error(new Error('Argument of type number is excepted!'));
                return;
            }
            const result = num * num
            resolve(result)
        }, 1000)
    })
}

/*
// 当promise的then函数中，1. 抛出异常， 2. reject()时
// 后续promise的调用链条中，就会发生异常,then 中的reject或catch就会被调用
calcSquarePromise(1)
    .then(result => {
        console.log(result);
        return calcSquarePromise(2)
    }).then(result => {
        return new Promise((resolve, reject) => {
            return reject(new Error('Something wrong!'))
        })
    }).catch(reason => {
        console.log(reason);
    })

calcSquarePromise(1)
    .then(result => {
        console.log(result);
        return calcSquarePromise(2)
    }).then(result => {
        console.log(result);
        return calcSquarePromise('xxx')
    }).then(undefined, reason => {
        console.log(reason); // 两种异常处理的效果一样
        throw Error('foobar')
    }).catch(reason => {
        console.log(reason); // 两种异常处理的效果一样， catch的更简洁一些
    })
*/
exports.foo = foo
exports.calcSquarePromise = calcSquarePromise

/*
let cb = function (error, result) {
    if (error !== null) {
        console.log(`result in error: ${result}`);
        console.log(`Catch error: ${String(error)}`);
        return
    }
    console.log(`The result is ${result}`);
}

let cb2 = function (error, result) {
    console.log(`The result is ${result}`);
}

foo('xxx', cb)
foo(123, cb)
foo('xxx', cb2)
*/