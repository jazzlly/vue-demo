"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoOoc = void 0;
var DemoOoc;
(function (DemoOoc) {
    var opt1 = {
        program: 'test1',
        params: "test2"
    };
    var opt2 = {
        program: "test2",
        params: ['1', '2']
    };
    var opt3 = {
        program: 'test3',
        params: () => 'hahaha'
    };
    // console.info(opt1);
    // console.info(typeof(opt1)) // object
    // console.info(opt2);
    // console.info(opt3);
    function printOpts(opt) {
        console.info(`program: ${opt.program}`);
        // console.info(opt instanceof RunOptions.type);
    }
    var drummer = {};
    drummer.name = 'tom';
    drummer.age = 34;
    drummer.inst = 'Drums';
    // console.info(drummer);
    var ryan = {};
    ryan.name = 'ryan';
    ryan.age = 43;
    ryan.inst = 'Drums';
    ryan.sport = 'badminton';
    var arr1 = {};
    arr1[0] = "foo";
    arr1[1] = "bar";
    // console.info(arr1)
    arr1 = ['a', 'b', 'c'];
    var arr2 = {
        foo: "bar",
        bar: "haha",
        haha: "wawa",
        1: "xixi"
    };
    // console.info(arr2)
})(DemoOoc = exports.DemoOoc || (exports.DemoOoc = {}));
