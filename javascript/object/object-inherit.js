"use strict";
var expect = require("chai").expect;
var _ = require('lodash')

// 继承的基本思想是 ： 原型链

/*
继承是通过创建SuperType的实例，并将该实例赋给SubType.prototype实现的。
实现的本质是重写原型对象，代之以一个新类型的实例。
换句话说，原来存在于SuperType的实例中的所有属性和方法，现在也存在于SubType.prototype中了。
在确立了继承关系之后，我们给SubType.prototype添加了一个方法，
这样就在继承了SuperType的属性和方法的基础上又添加了一个新方法。
*/
function foo() {
    function SuperType() {
        this.property = true;
        this.property2 = true;
    }
    SuperType.prototype.getSuperValue = function () {
        return this.property;
    };

    SuperType.prototype.getSuperValue2 = function () {
        return this.property2;
    };

    function SubType() {
        this.subproperty = false;
    }

    //继承了SuperType, 通过将子类的prototype指向父类对象
    SubType.prototype = new SuperType();
    // 添加了新的方法
    SubType.prototype.getSubValue = function () {
        return this.subproperty;
    };
    // 覆盖了原来的方法
    SubType.prototype.getSuperValue2 = function () {
        return this.subproperty;
    };

    var instance = new SubType();
    expect(instance.getSubValue()).to.be.false
    expect(instance.getSuperValue()).to.be.true
    expect(instance.getSuperValue2()).to.be.false

    expect(instance instanceof SuperType).to.be.true
    expect(instance instanceof SubType).to.be.true
    expect(instance instanceof Object).to.be.true

    expect(SubType.prototype.isPrototypeOf(instance)).to.be.true
    expect(SuperType.prototype.isPrototypeOf(instance)).to.be.true
    expect(Object.prototype.isPrototypeOf(instance)).to.be.true

    expect(instance.constructor).to.be.equal(SuperType)
    // !!!!
    expect(instance.constructor).to.be.not.equal(SubType)


}

foo()

// 原型类似一个java中静态成员变量
// 变量共享的问题， 
function problem() {
    function SuperType() {
        this.colors = ["red", "blue", "green"];
    }

    function SubType() {}
    SubType.prototype = new SuperType();

    var instance1 = new SubType();
    instance1.colors.push("black");
    console.log(instance1.colors); //"red,blue,green,black" 

    var instance2 = new SubType();
    console.log(instance2.colors); //"red,blue,green,black"
}

problem()

function constructorPattern() {
    function SuperType() {
        this.colors = ["red", "blue", "green"];
    }

    function SubType() {
        // 继承了SuperType     
        // 通过call和apply在新创建的对象上执行构造函数
        SuperType.call(this);
    }

    var instance1 = new SubType();
    instance1.colors.push("black");
    console.log(instance1.colors); //"red,blue,green,black" 

    var instance2 = new SubType();
    console.log(instance2.colors); //"red,blue,green"

    expect(instance1 instanceof SubType).to.be.true
    expect(instance2 instanceof SubType).to.be.true
    expect(instance1 instanceof SuperType).to.be.false
}

constructorPattern()

function constructorPattern2() {
    function SuperType(name) {
        this.name = name;patlist.txt
    }

    function SubType() {
        //继承了SuperType，同时还传递了参数     
        SuperType.call(this, "Nicholas");

        //实例属性     
        this.age = 29;
    }
    var instance = new SubType();
    console.log(instance.name);
    //"Nicholas"; 
    console.log(instance.age); //29
}

constructorPattern2()

// 1. 通过构造器模式继承属性，保证了属性的对象独立性
// 2. 通过原型模式继承方法，保证了方法的类共享性
function combinationInheritance() {
    console.log('-----------------------------');
    console.log('combinationInheritance ...');

    function SuperType(name) {
        this.name = name;
        this.colors = ["red", "blue", "green"];
    }

    SuperType.prototype.sayName = function () {
        console.log(this.name);
    };

    function SubType(name, age) {
        //继承属性     
        SuperType.call(this, name); // 将name, colors和subType的对象关联
        this.age = age;
    }

    //继承方法 
    SubType.prototype = new SuperType();
    SubType.prototype.sayAge = function () {
        console.log(this.age);
    };

    var instance1 = new SubType("Nicholas", 29);
    instance1.colors.push("black");

    console.log(instance1.colors); //"red,blue,green,black" 
    instance1.sayName(); //"Nicholas"; 
    instance1.sayAge(); //29 
    var instance2 = new SubType("Greg", 27);
    console.log(instance2.colors); //"red,blue,green" 
    instance2.sayName(); //"Greg"; 
    instance2.sayAge(); //27
}

combinationInheritance()

/*
原型模式: 
    简单属性，如String, Number, ... 每个对象独立
    复杂属性，如对象，数组，所有对象共有

    在没有必要兴师动众地创建构造函数，而只想让一个对象与另一个对象保持类似的情况下，
    原型式继承是完全可以胜任的。不过别忘了，包含引用类型值的属性始终都会共享相应的值，就像使用原型模式一样。

*/
function prototypePattern() {

    console.log('-----------------------------');
    console.log('prototypePattern ...');

    function object(o) {
        function F() {}

        F.prototype = o;
        return new F();
    }

    var person = {
        name: "Nicholas",
        friends: ["Shelby", "Court", "Van"]
    };
    var anotherPerson = object(person);
    console.log(anotherPerson.name); // 没有继承简单属性！
    console.log(anotherPerson.friends); // 共享继承了复杂(数组)属性！

    anotherPerson.name = "Greg";
    anotherPerson.friends.push("Rob");
    console.log(anotherPerson.name); // 没有继承简单属性！
    console.log(anotherPerson.friends); // 共享继承了复杂(数组)属性！

    var yetAnotherPerson = object(person);
    console.log(yetAnotherPerson.name); // 没有继承简单属性！
    console.log(yetAnotherPerson.friends); // 共享继承了复杂(数组)属性！
    yetAnotherPerson.name = "Linda";
    yetAnotherPerson.friends.push("Barbie");
    console.log(yetAnotherPerson.name); // 没有继承简单属性！
    console.log(yetAnotherPerson.friends); // 共享继承了复杂(数组)属性！

    console.log(person.friends);


}

prototypePattern()


function prototypePattern1() {

    console.log('-----------------------------');
    console.log('prototypePattern 1 ...');

    

    var person = {
        name: "Nicholas",
        friends: ["Shelby", "Court", "Van"]
    };
    var anotherPerson = Object.create(person);
    console.log(anotherPerson.name); // 没有继承简单属性！
    console.log(anotherPerson.friends); // 共享继承了复杂(数组)属性！

    anotherPerson.name = "Greg";
    anotherPerson.friends.push("Rob");
    console.log(anotherPerson.name); // 没有继承简单属性！
    console.log(anotherPerson.friends); // 共享继承了复杂(数组)属性！

    var yetAnotherPerson = Object.create(person, {
        name: {
            value: 'xxx'
        }
    });
    console.log(yetAnotherPerson.name); // 没有继承简单属性！
    console.log(yetAnotherPerson.friends); // 共享继承了复杂(数组)属性！
    // yetAnotherPerson.name = "Linda";
    yetAnotherPerson.friends.push("Barbie");
    console.log(yetAnotherPerson.name); // 没有继承简单属性！
    console.log(yetAnotherPerson.friends); // 共享继承了复杂(数组)属性！

    console.log(person.friends);


}

prototypePattern1()
