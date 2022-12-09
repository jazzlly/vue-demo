"use strict";
var DemoObjectJs;
(function (DemoObjectJs) {
    /**
     * javascript 对象学习
     */
    let person = new Object();
    // ts不允许
    // person.name = 'foo'
    // person.age = 32
    // person['name'] = 'foo'
    let p2 = {
        name: 'foo',
        age: 32
    };
    // console.info(`type of p2: ${typeof(p2)}`)    // object
    // console.info(p2)
    // const f1:string = "name"
    // console.info()
    // console.info(p2["age"])
    let p3 = {};
    // ts不允许
    // p3.name = 'foo'
    // p3.age = 32
    let arr1 = [];
    // console.info(typeof(arr1))
    arr1[0] = 1;
    arr1[1] = 2;
    // arr1['foo'] = 'bar' // error
    // console.info(arr1)
    let arr2 = [1, 2];
    // console.info(typeof(arr2)) // object
    // console.info(arr2 instanceof Array) // true
    const astr = 'foo';
    function checkType(params) {
        console.info(params instanceof String);
        console.info(params instanceof Number);
        console.info(params instanceof Array);
        console.info(Array.isArray(params));
        console.info(params instanceof Object);
        console.info();
    }
    checkType('foo');
    checkType(132);
    checkType({});
    checkType([]);
})(DemoObjectJs || (DemoObjectJs = {}));
