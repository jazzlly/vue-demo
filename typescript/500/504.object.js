"use strict";
var ObjectDemo;
(function (ObjectDemo) {
    var o1 = {
        foo: "bar",
        bar: "haha",
        har: "wahaha",
        war: 1.23,
        xixi: function (msg) {
            console.info(`xixi: ${this.foo}, ${msg}`);
        }
    };
    // console.info(typeof(o1))
    // console.info(o1) // object
    // console.info(o1.foo)
    // console.info(o1['bar'])
    o1.xixi('haha');
    // todo: json to js object
    // 对象作为参数模板
    function demo(obj) {
        console.info(obj);
    }
    function demo2(obj) {
        console.info(obj);
    }
    function demo3(arg1) {
        console.info(arg1);
    }
    function demo4(arg1) {
        console.info(arg1);
    }
    // demo3(o1)
    // 编译错误
    // demo4(o1)
})(ObjectDemo || (ObjectDemo = {}));
