"use strict";
var ProtoDemo;
(function (ProtoDemo) {
    /*
    原型： 每一个对象(除了null)都和另外一个对象prototype关联。
        对象从其原型继承属性

    原型的链:
        null
            Object.prototype
                {},         new Object(),    {foo: 'bar'}
                    new Date(), new RegExp()


    对象直接量, new Object()的原型:
        Object.prototype, 打印为[Object: null prototype] {}
        Object.prototype的原型为null

    数组的原型:
        Array.prototype, 打印为Object(0) []

    日期的原型:
        Date.prototype, 打印为 {}

    正则的原型:
        RegExp.prototype, 打印为 {}

    null
        Object.prototype
            Array.prototype
            Date.prototype
            RegExp.prototype
            Function.prototype

    通过new和构造函数创建的对象，其prototype就是构造函数的prototype
    */
    // console.info(Object.prototype);  // [Object: null prototype] {}
    // console.info(Object.getPrototypeOf(Object.prototype))  // null 
    // console.info(Object.getPrototypeOf(Object.getPrototypeOf(Object.prototype)))  //exception
    // console.info(Object.getPrototypeOf(o1))     // [Object: null prototype] {}
    // console.info(Object.getPrototypeOf(o0));    // [Object: null prototype] {}
    // console.info(Object.getPrototypeOf(new Object())); // [Object: null prototype] {}
    // console.info(Array.prototype);
    // console.info(Object.getPrototypeOf(new Array()));  // Object(0) []
    // console.info(Object.getPrototypeOf(Object.getPrototypeOf(new Array())))  // [Object: null prototype] {}
    // console.info(Date.prototype);
    // console.info(Object.getPrototypeOf(new Date()));   // {}
    // console.info(Object.getPrototypeOf(Object.getPrototypeOf(new Date())));   // [Object: null prototype] {}
    // console.info(RegExp.prototype);
    // console.info(new RegExp('js')); // /js/
    // console.info(Object.getPrototypeOf(new RegExp('js'))); // {}
    // console.info(Object.getPrototypeOf(Object.getPrototypeOf(new RegExp('js')))); // [Object: null prototype] {}
    let aFunc = function (foo) { };
    console.info(Object.getPrototypeOf(aFunc)); // {}
    console.info(Function.prototype); // {}
})(ProtoDemo || (ProtoDemo = {}));
