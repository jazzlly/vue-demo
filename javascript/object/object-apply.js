'use strict'
/* 总结：
所有的函数也是对象
函数对象有一个方法apply: 
    第一个参数是函数执行的上下文，this
    第二个参数是一个数组，调用函数时，作为这个函数的参数列表

Function.prototype.apply() 
*/

function objectApply() {
    var someObject = {
        food: 'pizza',
        // context alias this is someObject
        someFunction: function () {
            console.log(this.food)
        }
    };
    someObject.someFunction() // someFunction在someObject的context中执行

    function foo() {
        console.log(this.bar);
    }

    try {
        foo()
    } catch (err) {
        // 由于this是空， this.bar找不到，在strict模式下会报异常
        console.log('got error: ' + err.toString());
    }

    function fooo(a, b) {
        console.log(this.bar, a, b);
    }

    var aObj = {
        bar: 'kakak',
        moo: foo, // foo在aObj的context中执行
        noo: fooo, // fooo在aObj的context中执行
    }
    console.log('call aObj.moo');
    aObj.moo()
    aObj.noo('noo', 'iuu')

    var bar = {
        bar: 'wahah'
    }
    foo.apply(bar) // in foo, bar is 'this'
    fooo.apply(bar, ['kuu', 'muu']) // in fooo, bar is 'this'


    var someOTHERobject = {
        food: 'banaba'
    };
    try {
        someOTHERobject.someFunction(); // Error!
    } catch (err) {
        console.log('got error!');
    }

    // set function's context to someOtherObject!
    someObject.someFunction.apply(someOTHERobject); // banana
}

objectApply()

function arrayPushApply() {
    // Array.prototype.push()
    var myArray = [1, 2, 3];
    myArray.push(100);
    console.log(myArray) // [1, 2, 3, 100]
    myArray.push(101, 102, 103)
    console.log(myArray);

    // apply会将数组变成变长参数, 而push刚好能够接收变长参数
    Array.prototype.push.apply(myArray, [4, 5, 6])
    myArray.push.apply(myArray, [7, 8, 9])
    console.log(myArray);

    var object = {
        length: 0
    };
    Array.prototype.push.apply(object, [100]);
    console.log(object); // {0: 100, length: 1}
    console.log(object[0]); // 100

    object = {
        length: 0
    };
    [1, 2, 3].push.apply(object, [100]);

    console.log(object); // {0: 100, length: 1}

    object = {
        length: 0
    };
    [].push.apply(object, [100]);
    console.log(object); // {0: 100, length: 1}
}

arrayPushApply()