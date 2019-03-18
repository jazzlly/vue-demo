function promiseDemo() {
    function calcSquarePromise(num) {
        const promise = new Promise(function (resolve, error) {
            console.log('promise created...');
            setTimeout(() => {
                console.log('enter timeout function');
                if (typeof num !== 'number') {
                    error(new Error('Argument of type number is excepted!'));
                    return;
                }
                const result = num * num
                console.log(`resolve: ${resolve}`);
                resolve(result)
                console.log('after resolve!');
            }, 1000)
            console.log('promise quit!');
        })
        return promise
    }

    // promise 创建出来后，就会自己执行！
    // 不论是不是调用了executor!
    console.log('before new promise...');
    let p = calcSquarePromise(5)
    console.log('after new promise...');
}

function promiseJoinAll() {

    // join all promise!
    function job(delay) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                console.log('Resolving', delay);
                resolve('done ' + delay);
            }, delay);
        });
    }
    var promise = Promise.all([job(1000), job(2000), job(500), job(5000)]);
    promise.then(function (data) {
        console.log('All done');
        data.forEach(function (text) {
            console.log(text);
        });
    });
}




// Promise.all fail-fast behaviour
// Promise.all时，当其中一个promise失败后，整个函数都会出异常!
function promiseFailFast() {
    let p1 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 100, 'p1');
    });
    
    let p2 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 3000, 'p2');
    });
    
    let p3 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 1200, 'p3');
    });
    
    let p4 = new Promise(function (resolve, reject) {
        setTimeout(reject, 1000, 'p4');
    });
    
    let p5 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 800, 'p5');
    });

    let promise = Promise.all([p1, p2, p3, p4, p5]);
    promise
        .then(function (data) {
            data.forEach(function (data) {
                cconsole.log(data);
            });
        })
        .catch(function (error) {
            console.error('error', error);
        });
}

// promise race, 第一个的得到执行！
function promiseRace() {
    let p1 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 100, 'p1');
    });
    
    let p2 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 3000, 'p2');
    });
    
    let p3 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 1200, 'p3');
    });
    
    let p4 = new Promise(function (resolve, reject) {
        setTimeout(reject, 1000, 'p4');
    });
    
    let p5 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 800, 'p5');
    });

    let promise = Promise.race([p1, p2, p3, p4.catch(err => {return err}), p5]);
    promise
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.error('error', error);
        });
}

// Promise.all忽略promise的异常
function promiseWithCatch() {
    let p1 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 500, 'p1');
    });

    let p2 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 1000, 'p2');
    });

    let p3 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 1200, 'p3');
    });

    let p4 = new Promise(function (resolve, reject) {
        // setTimeout(reject, 300, 'p4');
        setTimeout(function() {
            reject('error!')
        }, 300)
    });

    let p5 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 800, 'p5');
    });

    let promise = Promise.all([p1.catch(function () {}), p2.catch(function () {}),
        p3.catch(function () {}), p4.catch(function (err) {return err}), p5.catch(function () {})
    ]);

    promise
        .then(function (datas) {
            datas.forEach(function (data) {
                console.log(data);
            });
        })
        .catch(function (error) {
            console.error('error', error);
        });
}

// 一个promise new出来后，就会立即执行executor中的方法
// 如果不想promise立即被执行，可以将new Promise封装在
// 一个函数，然后返回这个函数
// 这个函数可以被到处传递，但是promise没有被执行！
// 只有这个函数被调用时，promise才会被new出来，promise才会执行！
function delayPromise() {
    function delay(duration) {
        return function(){
            return new Promise(function(resolve, reject){
                setTimeout(function(){
                    resolve();
                }, duration)
            });
        };
    };

    let a = delay(1000);
    // 这时候promise还没有启动！

    // 调用a()后，promise才启动！
    a().then(() => console.log('done!'))
}
// promiseDemo()
// promiseJoinAll()
// promiseFailFast()
// promiseWithCatch()
// delayPromise()
promiseRace()
console.log('End!');