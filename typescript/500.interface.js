"use strict";
let peter = {
    name: "peter",
    age: 32,
    info: () => `peter`
};
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
console.info(ryan);
