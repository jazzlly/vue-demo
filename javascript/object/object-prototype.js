"use strict";
var expect = require("chai").expect;

// 原型模式， 类的方法通过prototype定义
function prototypePattern() {
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    Person.prototype.sayName = function () {
        console.log(this.name);
    }
    Person.prototype.sayJob = function () {
        console.log(this.job);
    }

    var person1 = new Person(" Nicholas", 29, "Software Engineer");
    var person2 = new Person(" Greg", 27, "Doctor");

    person1.sayName()
    person2.sayJob()

    // 对象的constructro属性可以标识对象的类型
    expect(person1.constructor).to.be.eq(Person)
    expect(person2.constructor).to.be.eq(Person)

    // 可以通过instanceOf来检测对象的类型
    expect(person1).to.be.instanceOf(Object)
    expect(person1).to.be.instanceOf(Person)
    expect(person2).to.be.instanceOf(Object)
    expect(person2).to.be.instanceOf(Person)

    // 通过原型模式创建的对象，其方法都是同一个函数对象
    expect(person1.sayName).to.be.equal(person2.sayName)
}

prototypePattern()

function prototypePattern1() {
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    Person.prototype.country = 'China'
    Person.prototype.sayName = function () {
        console.log(this.name);
    }
    Person.prototype.sayJob = function () {
        console.log(this.job);
    }

    var person1 = new Person(" Nicholas", 29, "Software Engineer");
    var person2 = new Person(" Greg", 27, "Doctor");

    expect(Person.prototype).to.be.not.null
    expect(Person.prototype.constructor).to.be.equal(Person)

    // 检查对象的原型！
    expect(person1.__proto__).to.be.equal(Person.prototype)
    expect(person2.__proto__).to.be.equal(Person.prototype)
    expect(Object.getPrototypeOf(person1)).to.be.eql(Person.prototype)
    expect(Object.getPrototypeOf(person2)).to.be.eql(Person.prototype)
    expect(Person.prototype.isPrototypeOf(person1)).to.be.true
    expect(Person.prototype.isPrototypeOf(person2)).to.be.true

    expect(Person.prototype.country).to.be.eql('China')
    expect(person1.country).to.be.eq('China')
    expect(person2.country).to.be.eq('China')
    expect(person1.country).to.be.equal(Person.prototype.country)
    expect(person2.country).to.be.equal(Person.prototype.country)

    expect(person1.hasOwnProperty('country')).to.be.false

    person2.country = 'Japan'
    expect(person2.country).to.be.not.equal(Person.prototype.country)
    expect(person2.hasOwnProperty('country')).to.be.true

    person1.cellphone = '15011005932'
    console.log(person1.cellphone); // 先找person1对象，是否有cellphone, 
    // 如果没有，就找person1的原型对象
    expect(person1.hasOwnProperty('cellphone')).to.be.true

    expect('country' in person1).to.be.true
    expect('country' in person2).to.be.true
    expect('foo' in person1).to.be.false
}

prototypePattern1()

function prototypePattern2() {
    console.log('----------------------------------');
    console.log('for in object');

    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    Person.prototype.country = 'China'
    Person.prototype.sayName = function () {
        console.log(this.name);
    }
    Person.prototype.sayJob = function () {
        console.log(this.job);
    }

    var person1 = new Person(" Nicholas", 29, "Software Engineer");
    for (const p in person1) {
        console.log(p);
        // person1.getProperty(p)
    }
    console.log(Object.keys(person1));
    console.log(Object.keys(Person.prototype));
}

prototypePattern2()

function prototypeSimple() {
    console.log('----------------------------------');

    function Person() {}
    Person.prototype = {
        // Person.prototype的constructor不再指向Person
        // constructor: Person,  // 可以手动添加！
        name: "Nicholas",
        age: 29,
        job: "Software Engineer",
        sayName: function () {
            console.log(this.name);
        }
    };
    // Person.prototype的constructor不再指向Person

    var foo = new Person()
    expect(foo instanceof Object).to.be.true
    expect(foo instanceof Person).to.be.true
    expect(foo.constructor).to.be.equal(Object)
    expect(Person.prototype.constructor).to.be.equal(Object)
    expect(Person.prototype.constructor).to.be.not.equal(Person)
}

prototypeSimple()

function prototypeRawObject() {
    expect(Array.prototype.sort).to.be.instanceOf(Function)

    // 修改原生对象的方法
    String.prototype.beginWith = function (text) {
        return this.indexOf(text) === 0
    }

    expect('foobar'.beginWith('foo')).to.be.true
}

prototypeRawObject()

// 构造函数模式和原型模式的混合
function mixPattern() {
    // 每个对象私有的属性放到构造函数中
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.friends = ["Shelby", "Court"];
    }

    // 对象共有的属性放到原型中
    Person.prototype = {
        constructor: Person,
        sayName: function () {
            console.log(this.name);
        }
    }

    var person1 = new Person(" Nicholas", 29, "Software Engineer");
    var person2 = new Person(" Greg", 27, "Doctor");
    person1.friends.push("Van");
    console.log(person1.friends); //"Shelby, Count, Van"
    console.log(person2.friends); //"Shelby, Count" 

    expect(person1.friends).to.be.not.equal(person2.friends)
    expect(person1.sayName).to.be.equal(person2.sayName)
}

mixPattern()

// 感觉没啥区别
function mixPattern2() {
    function Person(name, age, job) {
        //属性 
        this.name = name;
        this.age = age;
        this.job = job;

        //方法, 仅仅只会执行一次！
        if (typeof this.sayName != "function") {
            Person.prototype.sayName = function () {
                console.log(this.name);
            };
        }
    }

    var friend = new Person(" Nicholas", 29, "Software Engineer");
}

mixPattern2()