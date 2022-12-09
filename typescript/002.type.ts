
let aBoolean: boolean = true
let bBoolean: any = new Boolean(true)

// console.info(`type of booean is : ${typeof(aBoolean)}`) // boolean
// console.info(`type of booean is : ${typeof(bBoolean)}`) // object
// console.info(bBoolean instanceof Boolean)
// console.info(isBoolean(aBoolean))
// console.info(isBoolean(bBoolean))
// console.info(protCall(aBoolean))  // [object Boolean]
// console.info(protCall(bBoolean))  // [object Boolean]
// console.info(className(aBoolean))  // Boolean

/*
if (typeof myVar === 'string' || myVar instanceof String)
// it's a string
else
// it's something else
*/

let anInt: number = 123
// console.info(`type of number is : ${typeof(anInt)}`)  // number
// console.info(isNumber(anInt))
// console.info(protCall(anInt)) // [object Number]

let aFloat: number = 123.53
// console.info(`type of number is : ${typeof(aFloat)}`)  // number
// console.info(isNumber(aFloat))

let aHex: number = 0x1234
// console.info(isNumber(aHex))

let aStr: string = "foo"
// console.info(`type of string is : ${typeof(aStr)}`)  // string
// console.info(isString(aStr))
// console.info(protCall(aStr)) // [object String]

let bStr: string = `hello ${aStr}`
let dStr: any = new String()
// console.info(`type of string is : ${typeof(dStr)}`)  // Object
// console.info(isString(dStr))

// 类型转换
let aNum:number = Number('123.3')
// console.info(typeof(aNum));  // number

let cStr:string = String(123)
// console.info(typeof(cStr));  // string

// 数组
let arr: number[] = [1, 2, 3]
// console.info(typeof(arr)) // object
// console.info(protCall(arr)) // [object Array]
// console.info(className(arr)) // Array

// tuple
let aTuple: [string, string, number] = ['foo', 'bar', 123]
// console.info(aTuple[0]);
// console.info(aTuple[2]);
// console.info(protCall(aTuple)) // [object Array]

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


// console.info(className({})) // Object

// never类型
// 表示不存在的值或异常

let n: never
// console.info(n); // compile error
// n = (() => {
//     throw new Error("Typescript never!")
// })();

// console.info(n);
// console.info('haha');

let func = function (params:string) {
}
console.info(protCall(func))    // [object Function]
console.info(className(func))   // Function

function isUndefinedOrNull(o: any) : boolean {
    return o === undefined || o === null;
}

function isBoolean(o: any) : boolean {
    if (typeof(o) === 'boolean' || o instanceof Boolean) {
        return true
    }
    return false
}

// 8 bytes double
function isNumber(o: any) : boolean {
    if (typeof(o) === 'number' || o instanceof Number) {
        return true
    }
    return false
}

function isString(o: any) : boolean {
    if (typeof(o) === 'string' || o instanceof String) {
        return true
    }
    return false
}

function protCall(o: any) : string {
    return Object.prototype.toString.call(o);
}

function className(o: any) : string {
    return o.constructor.name
}