"use strict";
// var expect = require("chai").expect;
// var _ = require('lodash');

// 函数f4()定义在f3()内部，则f4可以访问f3中的变量。
// f4()同样也可以访问外部函数f2, f1和全局范围中的变量。
var v0 = 'v0'

var fn;

// f1定义在global环境中，v0, v1
function f1() {
    var v1 = 'v1'

    return f2()

    // f2定义在global，f1 环境中，能够访问v0, v1, v2
    function f2() {
        var v2 = 'v2'
        console.log(v0 + v1 + v2);
        f3() // f3虽然是f2中调用的，但是定义确实在global scope中

        fn = function() {
            var v5 = 'v5'
            console.log(v0 + v1 + v2 + v5);
        }

        // 匿名函数定义在global，f1, f2 环境中，能够访问v0, v1, v2
        // 就算函数返回了，里面的局部变量还是在scope chain的vo链条
        // 在函数外部也是能够被访问到的
        return function () {
            var v4 = 'v4'
            console.log(v0 + v1 + v2 + v4);
        }
    }
}
// f5定义在global环境中， 只能够访问global中的v0和自己作用域中的v5
function f3() {
    var v3 = 'v3'
    console.log(v0 + v3);

    // 报错 ReferenceError: v1 is not defined
    // console.log(v1);
    // console.log(v2);
    // console.log(v3);
    // console.log(v4);
}

var f6 = f1()
f6()

fn()