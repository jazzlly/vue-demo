"use strict";
class CPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        CPerson.count++;
    }
    dump() {
        console.info(`name: ${this.name}, age: ${this.age}`);
    }
}
CPerson.count = 0;
var ryan1 = new CPerson('ryan', 32);
// ryan1.dump()
// 类继承, 可以多重继承， 不能继承多个类
class CMusician extends CPerson {
    constructor(name, age, inst) {
        super(name, age);
        this.inst = inst;
    }
    dump() {
        console.info(`name: ${this.name}, age: ${this.age}, inst: ${this.inst}`);
    }
}
var cm2 = new CMusician('ryan', 43, 'piano');
// cm2.dump()
class CAthleteMusician extends CMusician {
    constructor(name, age, inst, sport) {
        super(name, age, inst);
        this.sport = sport;
    }
    dump() {
        super.dump();
        console.info(`name: ${this.name}, age: ${this.age}, inst: ${this.inst}, sport: ${this.sport}`);
    }
}
var cam = new CAthleteMusician('ryan', 32, 'piano', 'badminton');
cam.dump();
console.info(CPerson.count);
