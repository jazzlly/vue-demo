
let aBoolean: boolean = true

let anInt: number = 123
let aFloat: number = 123.53
let aHex: number = 0x1234

let aStr: string = "foo"
let bStr: string = `hello ${aStr}`

// 类型转换
let aNum:number = Number('123.3')
// console.info(typeof(aNum));  // number

let cStr:string = String(123)
// console.info(typeof(cStr));  // string

// 数组
let arr: number[] = [1, 2, 3]

// tuple
let aTuple: [string, string, number] = ['foo', 'bar', 123]
// console.info(aTuple[0]);
// console.info(aTuple[2]);

// void
function aFunc(msg: string): void {
    console.info(`message is : ${msg}`);
}
// aFunc("hello function")

// 多种类型
let aNumOrString: string | number
// aNumOrString = 123
// console.info(aNumOrString);
// aNumOrString = "foo"
// console.info(aNumOrString);


// any类型的变量的值和类型会动态改变
let x: any = 'I am type of any'
x = 123
x = true

let anys: any[] = [1, 2.2, true, 'hello']
// 和上一行等效
let anys2: Array<any> = [true, 1, 2, 3, "hello"]
// for (const e of anys2) {
//     console.info(e);
// }

// null and undefined
// undefined标识一个变量未被定义
let y: any     // undefined
// console.info(y); // undefined
// console.info(typeof(y));

// null是一个特殊的对象, 表示空对象
y = null
// console.info(y);
// console.info(typeof(y)); // object

typeof undefined             // undefined
typeof null                  // object
null === undefined           // false
null == undefined            // true

// never类型
// 表示不存在的值或异常

let n: never
// console.info(n); // compile error
// n = (() => {
//     throw new Error("Typescript never!")
// })();

// console.info(n);
// console.info('haha');

