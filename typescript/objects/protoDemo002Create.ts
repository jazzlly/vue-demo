namespace ProtoDemo {

    // 对象创建

    // 传入原型对象
    let o2 = Object.create(null)
    // console.info(o2);       // Object.prototype
    // console.info(Object.getPrototypeOf(o2)); // null

    let o3 = Object.create(Object.prototype) // 等于{}, new Object
    // console.info(Object.getPrototypeOf(o3)); // Object.prototype
    
    // 可以使用任何对象作为原型创建对象
    let o4 = Object.create({foo:'bar'})
    // console.info(Object.getPrototypeOf(o4)); // foo:bar

}