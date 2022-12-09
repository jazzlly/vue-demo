
export namespace DemoOoc {

    interface RunOptions {
        program: string,
        params: string | string[] | (() => string)
    }

    var opt1: RunOptions = {
        program: 'test1',
        params: "test2"
    }

    var opt2: RunOptions = {
        program: "test2",
        params: ['1', '2']
    }

    var opt3: RunOptions = {
        program: 'test3',
        params: () => 'hahaha'
    }

    // console.info(opt1);
    // console.info(typeof(opt1)) // object

    // console.info(opt2);
    // console.info(opt3);

    function printOpts(opt: RunOptions) {
        console.info(`program: ${opt.program}`);
        // console.info(opt instanceof RunOptions.type);
    }

    export interface Person {
        name: string,
        age: number
    }

    // 简单继承
    export interface Athlete extends Person {
        sport: string
    }

    // 简单继承
    export interface Musician extends Person {
        inst: string
    }

    // 多重继承
    export interface AthleteMusician extends Athlete, Musician {
    }

    var drummer = <Musician>{}
    drummer.name = 'tom'
    drummer.age = 34
    drummer.inst = 'Drums'
    // console.info(drummer);

    var ryan = <AthleteMusician>{}
    ryan.name = 'ryan'
    ryan.age = 43
    ryan.inst = 'Drums'
    ryan.sport = 'badminton'
    // console.info(ryan);


    // 接口实现数组
    export interface MyStringArray {
        [index: number]: string
    }

    var arr1: MyStringArray = {}
    arr1[0] = "foo"
    arr1[1] = "bar"
    // console.info(arr1)

    arr1 = ['a', 'b', 'c']
    // console.info(arr1)

    export interface MyStringMap {
        [key: string | number]: string
    }

    var arr2: MyStringMap = {
        foo: "bar",
        bar: "haha",
        haha: "wawa",
        1: "xixi"
    }

    // console.info(arr2)
}