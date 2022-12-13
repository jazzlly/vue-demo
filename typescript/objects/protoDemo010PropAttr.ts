namespace ProtoDemo {

    /*
     属性特征: property attribute
    0. 属性的值
    1. 可写， 属性是否可以设置
    2. 可枚举，是否可以在for/in循环中返回该属性
    3. 可配置, 是否可删除或修改该属性
    */

    // 创建对象, 原型，后面是对象属性的描述
    let o = Object.create({ foo: 'bar' }, {
        bar: { writable: true, enumerable: true, configurable: true },
        war: { writable: true, enumerable: true },
        xixi: { writable: true },
    })

    o.bar = 'bar'
    o.war = 'war'

    // 查看属性的描述符
    // console.info(Object.getOwnPropertyDescriptor(o, 'foo')); // undefined， 继承的属性
    // console.info(Object.getOwnPropertyDescriptor(o, 'bar'));
    // console.info(Object.getOwnPropertyDescriptor(o, 'war'));
    // console.info(Object.getOwnPropertyDescriptor(o, 'xixi'));

    let o2 = {
        xixi: 'haha',

        get haha(): string {
            return this.xixi + "haha"
        }
    }

    /* {
        get: [Function: get haha],
        set: undefined,
        enumerable: true,
        configurable: true
    } */
    console.info(Object.getOwnPropertyDescriptor(o2, 'haha'));

    Object.defineProperty(o2, 'y', {
        value: 3, writable: true, enumerable: true, configurable: true
    })

    // 将属性修改成getter方法
    Object.defineProperty(o2, 'xixi', {
        get : function () {
            return 3
        },
        enumerable: true, 
        configurable: true
    })

    // console.info(o2);
    // console.info(o2.xixi);
    // o2.xixi = 'haha'   // error

    Object.defineProperties(o2, {
        xx: {value: 1, writable: true, enumerable: true, configurable: true},
        yy: {value: 2, writable: true, enumerable: true, configurable: true},
        zz: {value: 3, writable: true, enumerable: true, configurable: true},
    })

    console.info(o2);
}