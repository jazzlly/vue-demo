"use strict";
var expect = require("chai").expect;

// 创建对象：工厂模式
function factoryMethod() {
    console.log("------------------------------------");
    console.log("enter factory method:");

    function createPerson(name, age, job) {
        var o = new Object();
        o.name = name;
        o.age = age;
        o.job = job;
        o.sayName = function () {
            alert(this.name);
        };
        return o;
    }
    var person1 = createPerson(" Nicholas", 29, "Software Engineer");
    var person2 = createPerson(" Greg", 27, "Doctor");
    console.log(`factory method, person1`);
    console.log(person1);
    console.log(`factory method, person2`);
    console.log(person2);

    // 问题：不知道person的类型
    expect(person1).to.be.instanceOf(Object) // 就是个对象！
}

factoryMethod()

// 通过构造函数创建对象
function constructorMethod() {
    console.log("------------------------------------");
    console.log("enter constructor method:");

    // 构造函数， 构造函数一般都以大写字母开头
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;

        // 每次new一个Person, 都会创建一个函数对象！
        this.sayName = function () {
            console.log((this.name))
        };
        // 和sayName的定义方式等价
        this.sayJob = new Function("console.log(this.job)")
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

    // 构造函数的缺点： 每个对象的方法都需要重新创建一遍
    expect(person1.sayName).to.be.not.equal(person2.sayName)
    expect(person1.sayName).to.be.not.deep.equal(person2.sayName)

    // 以 这种 方式 定义 的 构造 函数 是 定义 在 Global 对象
    // （ 在 浏览器 中 是 window 对象） 中的。

    // 当作 构造 函数 使用 
    var person = new Person(" Nicholas", 29, "Software Engineer");
    person.sayName(); //"Nicholas" 

    // 作为 普通 函数 调用 , nodejs 不支持
    // Person(" Greg", 27, "Doctor"); // 添加 到 window
    // window.sayName(); //"Greg" 

    // 在另 一个 对象 的 作用域 中 调用 
    var o = new Object();
    Person.call(o, "Kristen", 25, "Nurse");
    o.sayName(); //"Kristen"
}

constructorMethod()

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
        // constructor: Person,
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
    // expect(foo.constructor).to.be.equal(Object)
    expect(foo.constructor)
        .to.be.equal(Person.prototype.constructor)
        .and.to.be.equal(Object)
        .but.not.equal(Person)

    expect(Person.prototype.constructor).to.be.eql(Object)
    expect(Person.prototype.constructor).to.be.not.eql(Person)
    
}

prototypeSimple()