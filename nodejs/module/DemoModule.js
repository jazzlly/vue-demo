exports.str = 'I am a string!'
exports.add = (a, b) => {
    return a + b;
}

exports.mul = (a, b) => {
    return a * b;
}

// { str: 'I am a string!', add: [Function], mul: [Function] } 
console.log(exports);
console.log(module.exports);
console.log(exports === module.exports);