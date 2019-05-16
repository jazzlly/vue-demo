"use strict";
var expect = require("chai").expect;
var _ = require('lodash');


// 函数可以作为函数的参数
function functionAsObject() {
    const calculateAge = function (yearOfBirth) {
        return new Date().getFullYear() - yearOfBirth
    }

    function calcArray(arr, fn) {
        var results = []
        arr.forEach(function (i) {
            results.push(fn(i))
        })
        return results
    }

    var ages = calcArray([1978, 1981], calculateAge)
    console.log(ages);

    const isFullAge = function (age) {
        return age >= 18
    }
    const maxHeartRate = function (age) {
        if (age >= 18 && age <= 81) {
            return Math.round(206.9 - (0.67 * age))
        } else {
            return -1
        }
    }
    console.log(calcArray(ages, isFullAge));
    console.log(calcArray(ages, maxHeartRate));
}

// functionAsObject()

// 函数可以作为函数的返回值
function functionAsReturn() {
    function interviewQuestion(type) {
        if (type === 'student') {
            return function (name) {
                console.log(name + ', student question....');
            }
        } else if (type === 'teacher') {
            return function (name) {
                console.log(name + ', teacher question...');
            }
        } else {
            return function (name) {
                console.log(name + ', hello!');
            }
        }
    }
    interviewQuestion('student')('ryan')
    interviewQuestion('teacher')('cheng')
}
// functionAsReturn()

// Immediately invoked function expression(IIFE)
// 定义了IIFE, 前面的语句就需要添加分号
function iifeDemo() {
    function game() {
        var score = Math.random() * 10
        console.log(score);
        console.log(score > 5);
    }
    game();

    // IIFE
    (function() {
        var score = Math.random() * 10
        console.log(score);
        console.log(score > 5);
    })();

    (function(luck) {
        var score = Math.random() * 10
        console.log(score);
        console.log(score - luck > 5);
    })(2)
}
// iifeDemo();

function closureTest() {
    function retirement(retirementAge) {
        var a = ' years left unti retirement.'
        return function(yearOfBirth) {
            const age = new Date().getFullYear() - yearOfBirth
            console.log((retirementAge - age) + a)
        }
    }
    var func1 = retirement(65)  // 返回一个计算退休年龄的函数，退休标准是65岁
    // retirement()函数返回后， func1还能访问retirement中的局部变量a
    func1(1978);
    // retirement(65)(1978)
}
closureTest()


function functionCallTest() {
    var john = {
        name: 'john',
        age: 25,
        greeting: function(style, timeofday) {
            if ( style === 'normal') {
                console.log(`Good ${timeofday}, ${this.name}!`);
            } else {
                console.log(`What's up, ${this.name}!`);
            }
        }
    }

    john.greeting('normal', 'morning')

    var jane = {
        name: 'jane'
    }
    // call example!
    john.greeting.call(jane, 'normal', 'evening')
    // apply example!
    john.greeting.apply(jane, ['xxx', 'afternoon'])

    // bind example: 可以将一个函数的多个参数固化
    var ryan = {
        name: 'ryan'
    }
    var ryanFunc = john.greeting.bind(ryan)
    ryanFunc('normal', 'xxx')
    var ryanNormal = john.greeting.bind(ryan, 'normal')
    ryanNormal('afternoon')
    var ryanAll = john.greeting.bind(ryan, 'normal', 'allday')
    ryanAll()
}
functionCallTest()