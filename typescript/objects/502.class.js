"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        Person.count++;
    }
    dump() {
        console.info(`name: ${this.name}, age: ${this.age}`);
    }
}
Person.count = 0;
var ryan1 = new Person('ryan', 32);
// ryan1.dump()
// 类继承, 可以多重继承， 不能继承多个类
class CMusician extends Person {
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
console.info(Person.count);
