namespace ProtoDemo {

    /* 对象的三个属性:
    1. prototype
        通过new创建的对象的原型是它构造函数的prototype
    2. class
    3. extensible attribute
     */
    let o = {}

    // console.info(Object.getPrototypeOf(o)); // Object.prototype
    // console.info(o.constructor.prototype);  // Object.prototype

    // console.info(null.isPrototypeOf(Object.prototype)); // compile error!
    // console.info(Object.prototype.isPrototypeOf(o))  // true
    // console.info(Array.prototype.isPrototypeOf([]))  // true
    // console.info(Date.prototype.isPrototypeOf(new Date())) // true

    // console.info(o.toString());  // 返回类型信息

    function classOf(o:any) {
        if (o === undefined) {
            return 'undefined'
        }
        if (o === null) {
            return 'null'
        }
        return Object.prototype.toString.call(o).slice(8, -1)
    }

    // console.info(classOf(true));    // Boolean
    // console.info(classOf(123));     // Number
    // console.info(classOf('test'));  // String
    // console.info(classOf(/./));     // RegExp
    // console.info(classOf({}));      // Object
    // console.info(classOf([]));      // Array
    // console.info(classOf(function () {}))  // Function

    /* 是否可以扩展 */
    console.info(Object.isExtensible({}));
    console.info(Object.isExtensible([]));
}