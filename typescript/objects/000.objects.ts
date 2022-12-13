namespace ObjectDemo {

    /*
    对象是一组属性(property)的的无序集合

    对象的属性包括名字和值

    属性特征: property attribute
    0. 属性的值
    1. 可写， 属性是否可以设置
    2. 可枚举，是否可以在for/in循环中返回该属性
    3. 可配置, 是否可删除或修改该属性

    每个对象的三个对象特性
    1. 对象的原型(prototype), 指向另外一个对象，本对象的属性继承与该对象
    2. 对象的类(class), 标识对象类型的字符串
    3. 对象的扩展标记(extensible flag)，是否可为该对象添加新的属性

    对象分类
    1. 内置对象 (native objects) ECMAScript规范定义的对象。如数组，函数，日期和正则表达式等
    2. 宿主对象 (host object), js解释器嵌入的宿主环境(浏览器)定义的对象。如HTMLElement
    3. 自定义对象 (user-defined object)

    属性分类
    1. 自有属性， own property, 直接在对象中定义的属性
    2. 继承属性，inherited property, 在对象原型中定义的属性
    */

    // 通过对象直接量创建对象
    let o1 = {
        foo: "bar",
        bar: "haha",
        har: "wahaha",
        war: 1.23,
        xixi: function (msg:string) {
            console.info(`xixi: ${this.foo}, ${msg}`)
        }
    }

    // console.info(typeof(o1))
    // console.info(o1) // object
    // console.info(o1.foo)
    // console.info(o1['bar'])
    o1.xixi('haha')
    

    // 通过new + constructor创建对象
    let o2 = new Object()
    let anArray = new Array()
    let aDate = new Date()
    let aReg = new RegExp("js")

    // todo: json to js object

    // 对象作为参数模板
    function demo(obj: { foo: string }) {
        console.info(obj)
    }

    function demo2(obj: { boo: string }) {
        console.info(obj)
    }

    // demo(o1)

    /* 运行时报错
    object.ts:23:7 - error TS2345: Argument of type '{ foo: string; bar: string; har: string; war: number; }' is not assignable to parameter of type '{ boo: string; }'.
      Property 'boo' is missing in type '{ foo: string; bar: string; har: string; war: number; }' but required in type '{ boo: string; }'.
    */
    // demo2(o1)

    interface demoIfc1 {
        foo: string
        bar: string
    }

    interface demoIfc2 {
        boo: string
    }

    function demo3(arg1: demoIfc1) {
        console.info(arg1)
    }

    function demo4(arg1: demoIfc2) {
        console.info(arg1)
    }

    // demo3(o1)

    // 编译错误
    // demo4(o1)
}