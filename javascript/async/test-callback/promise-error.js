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

module.exports = calcSquarePromise

