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
    console.log(instance2.colors);  //"red,blue,green,black"
}

problem()

