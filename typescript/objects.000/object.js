"use strict";
var o1 = {
    foo: "bar",
    bar: "haha",
    har: "wahaha",
    war: 1.23
};
// console.info(typeof(o1))
// console.info(o1) // object
// todo: json to js object
// 对象作为参数模板
function demo(obj) {
    console.info(obj);
}
function demo2(obj) {
    console.info(obj);
}
demo(o1);
function demo3(arg1) {
    console.info(arg1);
}
demo3(o1);
