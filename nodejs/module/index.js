// https://darrenderidder.github.io/talks/ModulePatterns/#/


// fixme: not good!
require('./Hello')
// console.log("hello world!")

// 定义全局变量
// fixme: not good!
require('./Foo')
fooFunc("wahaha!")

// import an anonymous function
const bar = require('./Bar')
bar("barbarbar!")

// import an named function
const baz = require('./Baz').baz
baz("md baz 1 !")

// import an named function
const bax = require('./Baz')
bax.baz("md baz!")

// import an anonymous object
const buz = require('./Buz')
buz.log()

// import a named object
const quz = require('./Quz').Quz
quz.log()

// import an anonymous prototype
const Doo = require('./Doo')
const doo = new Doo()
doo.log()

// import a named prototype
const Doz = require('./D    oz').Doz
const doz = new Doz()
doz.log()


const demo = require('./DemoModule')
console.log(demo.add(1, 2));
console.log(demo.mul(3, 4));
console.log(demo.str);

const {add, mul} = require('./DemoModule')
console.log(add(1, 3));
console.log(mul(4, 5));

/* MEMO: 
exports is alias of module.exports!
// { str: 'I am a string!', add: [Function], mul: [Function] } 
console.log(exports);
console.log(module.exports);
console.log(exports === module.exports);
*/

