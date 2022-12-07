
// 写起来类似一个json
interface IPersion {
    name: string,
    age: number,
    info: () => string
}

let peter : IPersion = {
    name: "peter",
    age: 32,
    info: () => `peter`
}

// console.info(peter);
// console.info(peter.name);
// console.info(peter.age);
// console.info(peter.info());

interface RunOptions {
    program: string,
    params: string | string[] | (()=>string)
}

var opt1 : RunOptions =  {
    program: 'test1',
    params: "test2"
}

var opt2 : RunOptions = {
    program : "test2",
    params: ['1', '2']
}

var opt3 : RunOptions = {
    program: 'test3',
    params: () => 'hahaha'
}

// console.info(opt1);
// console.info(opt2);
// console.info(opt3);

function printOpts(opt: RunOptions) {
    console.info(`program: ${opt.program}`);
    // console.info(opt instanceof RunOptions.type);
}


interface CPerson {
    name: string,
    age: number
}

// 简单继承
interface Athlete extends CPerson {
    sport: string
}

// 简单继承
interface Musician extends CPerson {
    inst: string
}

// 多重继承
interface AthleteMusician extends Athlete, Musician {
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
console.info(ryan);


