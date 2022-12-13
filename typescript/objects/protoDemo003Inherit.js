"use strict";
var ProtoDemo;
(function (ProtoDemo) {
    // 创建对象, 原型，后面是对象属性的描述
    let parent = Object.create({ foo: 'bar' }, {
        bar: { writable: true, enumerable: true, configurable: true },
        war: { writable: true, enumerable: true },
        xixi: { writable: true },
    });
    parent.foo = 'foo';
    parent.war = 'hahah';
    parent.xixi = 'haha';
    delete parent.foo;
    delete parent.bar;
    // delete parent.war  // exception
    // console.info(parent.hasOwnProperty('foo'));     // false 继承的属性, 不是自己的属性
    // console.info(parent.hasOwnProperty('bar'));     // false 被删除了
    // console.info(parent.hasOwnProperty('war'));
    // console.info(parent.hasOwnProperty('xixi'));
    let child1 = Object.create(parent, {
        cp1: { writable: true, enumerable: true, configurable: true },
        cp2: { writable: true, enumerable: true },
        cp3: { writable: true },
        cp4: {}
    });
    console.info(child1.foo); // 如果没有设置该属性，通过原型链查找该属性
    parent.foo = 'bar1';
    console.info(child1.foo); // 如果没有设置该属性，通过原型链查找该属性
    child1.foo = 'child bar'; // 不会修改原型链上的属性
    console.info(child1);
    console.info(parent.foo); // 原型链上属性没有修改
    console.info(child1.not_exists); // undefined
    // 安全性检查
    if (child1 && child1.not_exists && child1.not_exists.len) {
        console.info("pass test");
    }
})(ProtoDemo || (ProtoDemo = {}));
