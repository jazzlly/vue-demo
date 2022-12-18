"use strict";
var ClassDemo;
(function (ClassDemo) {
    // https://zh.javascript.info/class
    class User {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        greeting() {
            console.info(`This is ${this.name}, I'am ${this.age} years old!`);
        }
    }
    // console.info(User);   // [class user]
    // console.info(typeof(User)); // function, 类是一个函数
    // console.info(User === User.prototype.constructor);  // true, 即为其原型的构造函数
    // console.info(User.prototype);  // {}
    const peter = new User('petter', 32);
    // peter.greeting()
    // console.info(Object.getPrototypeOf(peter));
    // console.info(peter.constructor.name);
    // console.info(peter instanceof User);
    console.info(Object.getPrototypeOf(peter) === User.prototype); // true
    console.info(Object.getPrototypeOf(peter) === User.prototype.constructor.prototype); // true
})(ClassDemo || (ClassDemo = {}));
