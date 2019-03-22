var util = require('util')
var expect = require('chai').expect

// 全局对象: 浏览器中是window对象

var globalContext = null

console.log(util.inspect(this));
// !!! nodejs里面 一开始this为一个{}

// f1定义在global环境中，v0, v1
function f1() {
    console.log('f1');
    // console.log(this); // 全局对象， window

    globalContext = this  // !!! 这时才创建了global this!
    expect(this).to.be.equal(globalContext)
}

f1()  // 对于普通的函数调用，this就是global对象

var john = {
    name: 'joho',
    age: 34,
    sayName: function() {
        console.log(this.name);
        console.log(this);  // this就是john
        // expect(this).to.be.equal(john)

        // 普通函数中, this等于global context
        var that = this;
        function foo() {
            console.log('foo');
            expect(this).to.be.equal(globalContext)
            console.log(that);
        }
        foo() // 这个叫regular function call

        function bar() {
            console.log('bar');
            console.log(this);
            expect(this).to.be.not.equal(globalContext)
        }
        bar.call(this) // 这个叫object method call
    }
}

john.sayName()   // 对于对象的成员方法调用，this就是该对象

var mike = {
    name: 'mike',
    age: 23
}
mike.sayName = john.sayName
mike.sayName() // 对于对象的成员方法调用，this就是该对象。
                // 虽然sayName定义在了john对象里面, this却变成了mike

var ryan = {
    name: 'ryan',
    age: 41
}

john.sayName.apply(ryan)
john.sayName.call(ryan)

function wuheihei() {
    console.log('wuheihei...');
    /*
        对于regular function call, this就是global object
        对于object method call, this就是该object
    */
    console.log(this); 
}
 wuheihei() // regular function call
 wuheihei.apply(ryan) // object method call
 wuheihei.call(ryan)  // object method call