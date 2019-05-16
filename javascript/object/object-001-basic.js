"use strict";
var expect = require("chai").expect;
var _ = require('lodash');

// 笨拙的创建对象的方法
function naiveObjectTest() {
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
}
naiveObjectTest()

function simpleObjectTest() {
    // 和naive boject类似, 感觉就是一种简单的写法
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

    const p = simpleObject()
    const sp = simpleObject()

    // sayName是两个不同的函数！
    expect(sp).to.be.not.equal(p)
    expect(sp instanceof Object).to.be.true
    expect(p instanceof Object).to.be.true
    expect(_.isEqual(
        _.omit(p, ['sayName']),
        _.omit(sp, ['sayName'])
    )).to.be.true
}
simpleObjectTest()

function createObjectDemo() {
    var p1 = new Object()
    p1.name = 'tom'
    p1.age = 35

    var p2 = {
        name: 'tom',
        age: 35
    }
    expect(p1).to.be.not.equal(p2)
    expect(p1).to.be.deep.equal(p2)

    // 创建对象时，不写new 也是可以的
    var p3 = Object() // fixme: why
    p3.name = 'tom'
    p3.age = 35

    expect(p1).to.be.not.equal(p3)
    expect(p1).to.be.deep.equal(p3)

    var p4 = {} // 空对象
    var p5 = new Object()
    expect(p4).to.be.not.equal(p5)
    expect(p4).to.be.deep.equal(p5)

}
createObjectDemo()

// 通过构造函数和原型创建对象
function createObjectByConstructorAndProto() {

    function Person(name, yearOfBirth, job) {
        // 对象自己的属性放到构造函数中，共享的属性放到原型中
        this.name = name
        this.yearOfBirth = yearOfBirth
        this.job = job
        // 每个对象都会创建一个Function object; 对于共享的对象，可以放到prototype中
        // this.calculateAge = function() {
        //     return new Date().getFullYear() - yearOfBirth
        // }
    }
    // 对象自己的属性放到构造函数中，共享的属性放到原型中
    Person.prototype.country = 'China'
    Person.prototype.calculateAge = function () {
        return new Date().getFullYear() - this.yearOfBirth
    }
    Person.prototype.sayName = function () {
        console.log('My name is:' + this.name);
    }
    // People, Man, Woman和Person都是同义词
    const People = Person
    const Man = Person
    const Woman = Person

    // 通过原始方法创建的对象!
    var p1 = {}
    Person.apply(p1, ['foo', 1982, 'developer'], )
    console.log(p1);
    expect(p1).to.be.instanceOf(Object)
    expect(p1).to.be.not.instanceOf(Person)

    // p1.prototype = Person.prototype
    // expect(p1).to.be.not.instanceOf(Person)
    // p1.sayName()

    var p2 = new Person('bar', '2013', 'student')
    console.log(p2);
    expect(p2).to.be.instanceOf(Object)
    expect(p2).to.be.instanceOf(Person)
    p2.sayName()

    var phoenix = new People('feng', 1981, 'EE')
    console.log(phoenix.calculateAge());
}
createObjectByConstructorAndProto()

// 通过Object.create()创建对象
function objectCreateDemo() {
    const personPrototype = {
        calculateAge: function () {
            return new Date().getFullYear() - this.yearOfBirth
        }
    }
    var ryan = Object.create(personPrototype)
    ryan.yearOfBirth = 1978
    console.log(ryan.calculateAge());

    // 这里的写法稍显复杂
    var tom = Object.create(personPrototype, {
        name: {
            value: "tom"
        },
        yearOfBirth: {
            value: 1981
        }
    })
    console.log(tom.calculateAge());
}
objectCreateDemo()

/*
    js的两种内置属性：数据属性和访问器属性

    1.数据属性
        [[Configurable]]：
            能否通过delete删除属性从而重新定义属性，
            能否修改属性的特性，或者能否把属性修改为访问器属性。
            像前面例子中那样直接在对象上定义的属性，
            它们的这个特性默认值为true。

        [[Enumerable]]：
            表示能否通过for-in循环返回属性。
            像前面例子中那样直接在对象上定义的属性，
            它们的这个特性默认值为true。

        [[Writable]]：
            表示能否修改属性的值。
            像前面例子中那样直接在对象上定义的属性，
            它们的这个特性默认值为true。

        [[Value]]：
            包含这个属性的数据值。
            读取属性值的时候，从这个位置读；
            写入属性值的时候，把新值保存在这个位置。
            这个特性的默认值为undefined。
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
    [[Configurable]]：
        表示能否通过delete删除属性从而重新定义属性，
        能否修改属性的特性，或者能否把属性修改为数据属性。
        对于直接在对象上定义的属性，这个特性的默认值为true。
    [[Enumerable]]：
        表示能否通过for-in循环返回属性。
        对于直接在对象上定义的属性，这个特性的默认值为true。
    [[Get]]：
        在读取属性时调用的函数。默认值为undefined。
    [[Set]]：
        在写入属性时调用的函数。默认值为undefined。

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