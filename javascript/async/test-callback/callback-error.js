// error in async function
// 由于异步函数的执行，已经不再主函数的execution stack中了，
// 所以主函数无法catch到异常

// error first pattern, callback的第一个参数为error
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

module.exports = foo

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
