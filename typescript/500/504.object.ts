namespace ObjectDemo {
    var o1 = {
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