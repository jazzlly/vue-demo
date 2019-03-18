"use strict";
var expect = require("chai").expect;

function naiveObject() {
    var person = new Object();
    person.name = "ryan";
    person.age = 41;
    person.job = "developer";
    person.sayName = function () {
        console.log(`my name is ${this.name}`);
    };

    // 不知道person对象的类型
    return person;
}

const p = naiveObject();
console.log(p);
p.sayName();

//
function simpleObject() {
    // 这个对象也是没有类型的
    return {
        name: "ryan",
        age: 41,
        job: "developer",
        sayName: function () {
            console.log(`my name is ${this.name}`);
        }
    };
}

const sp = simpleObject();
console.log(sp);
sp.sayName();

// sayName是两个不同的函数！
// expect(sp).to.deep.equal(p)

/*
    js的两种内置属性：数据属性和访问器属性

    1. 数据属性
    [[Configurable]]： 
        能否 通过 delete 删除 属性 从而 重新 定义 属性， 
        能否 修改 属性 的 特性， 或者 能否 把 属性 修改 为 访问 器 属性。 
        像 前面 例子 中 那样 直接 在 对象 上 定义 的 属性， 
        它们 的 这个 特性 默认值 为 true。 
    [[Enumerable]]： 
        表示 能否 通过 for- in 循环 返回 属性。 
        像 前面 例子 中 那样 直接 在 对象 上 定义 的 属性， 
        它们 的 这个 特性 默认值 为 true。 
    [[Writable]]： 
        表示 能否 修改 属 性的 值。 
        像 前面 例子 中 那样 直接 在 对象 上 定义 的 属性，
         它们 的 这个 特性 默认值 为 true。
    [[Value]]： 
        包含 这个 属性 的 数据 值。 
        读取 属性 值 的 时候， 从这 个 位置 读；
         写入 属性 值 的 时候， 把 新 值 保存 在这 个位 置。 
         这个 特性 的 默认值 为 undefined。
*/
function defProps() {
    console.log("------------------------------------");
    console.log("enter defProps:");

    var person = {};
    Object.defineProperty(person, "name", {
        configurable: true,
        enumerable: true,
        writable: false, // writable修改成false之后，就不能修改回来
        value: "ryan"
    });

    console.log(person.name);
    try {
        person.name = "jiang"; // strict模式会抛出异常?
    } catch (err) {
        // console.log(err);
    }
    console.log("person name: " + person.name);
    delete person.name;
    console.log("person name (after delete): " + person.name); // undefine

    try {
        Object.defineProperty(person, "name", {
            writable: true
        });
    } catch (err) {
        console.log(err);
    }
}

defProps();

/* 访问器属性：
    [[Configurable]]： 表示 能否 通过 delete 删除 属性 从而 重新 定义 属性， 
        能否 修改 属性 的 特性， 或者 能否 把 属性 修改 为数 据 属性。 
        对于 直接 在 对象 上 定义 的 属性， 这个 特性 的 默认值 为 true。
    [[Enumerable]]： 表示 能否 通过 for- in 循环 返回 属性。 
        对于 直接 在 对象 上 定义 的 属性， 这个 特性 的 默认值 为 true。 
    [[Get]]： 在读 取 属性 时调 用的 函数。 默认值 为 undefined。 
    [[Set]]： 在 写入 属性 时调 用的 函数。 默认值 为 undefined。

*/
function defAccessor() {
    console.log("------------------------------------");
    console.log("enter defAccessor:");

    var book = {
        _year: 2004,
        edition: 1
    };
    Object.defineProperty(book, "year", {
        get: function () {
            return this._year;
        },
        set: function (newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    });
    book.year = 2005;
    console.log(book.edition); //2
}
defAccessor();

function defProps2() {
    var book = {};
    Object.defineProperties(book, {
        _year: {
            value: 2004
        },
        edition: {
            value: 1
        },
        year: {
            get: function () {
                return this._year;
            },
            set: function (newValue) {
                if (newValue > 2004) {
                    this._year = newValue;
                    this.edition += newValue - 2004;
                }
            }
        }
    });
}