"use strict";
let aBoolean = true;
let anInt = 123;
let aFloat = 123.53;
let aHex = 0x1234;
let aStr = "foo";
let bStr = `hello ${aStr}`;
// 类型转换
let aNum = Number('123.3');
// console.info(typeof(aNum));  // number
let cStr = String(123);
// console.info(typeof(cStr));  // string
// 数组
let arr = [1, 2, 3];
// tuple
let aTuple = ['foo', 'bar', 123];
// console.info(aTuple[0]);
// console.info(aTuple[2]);
// void
function aFunc(msg) {
    console.info(`message is : ${msg}`);
}
// aFunc("hello function")
// 多种类型
let aNumOrString;
// aNumOrString = 123
// console.info(aNumOrString);
// aNumOrString = "foo"
// console.info(aNumOrString);
// any类型的变量的值和类型会动态改变
let x = 'I am type of any';
x = 123;
x = true;
let anys = [1, 2.2, true, 'hello'];
// 和上一行等效
let anys2 = [true, 1, 2, 3, "hello"];
// for (const e of anys2) {
//     console.info(e);
// }
// null and undefined
// undefined标识一个变量未被定义
let y; // undefined
// console.info(y); // undefined
// console.info(typeof(y));
// null是一个特殊的对象, 表示空对象
y = null;
// console.info(y);
// console.info(typeof(y)); // object
typeof undefined; // undefined
typeof null; // object
null === undefined; // false
null == undefined; // true
// never类型
// 表示不存在的值或异常
let n;
// console.info(n); // compile error
// n = (() => {
//     throw new Error("Typescript never!")
// })();
// console.info(n);
// console.info('haha');
