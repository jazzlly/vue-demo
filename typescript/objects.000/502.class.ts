
class Person {
    static count: number = 0

    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
        Person.count++
    }

    dump():void {
        console.info(`name: ${this.name}, age: ${this.age}`);
    }
}

var ryan1:Person = new Person('ryan', 32)
// ryan1.dump()

// 类继承, 可以多重继承， 不能继承多个类
class CMusician extends Person {
    inst: string

    constructor(name: string, age: number, inst: string) {
        super(name, age);
        this.inst = inst
    }

    dump():void {
        console.info(`name: ${this.name}, age: ${this.age}, inst: ${this.inst}`);
    }
}

var cm2 = new CMusician('ryan', 43, 'piano')
// cm2.dump()

class CAthleteMusician extends CMusician {
    sport: string

    constructor(name: string, age: number, inst: string, sport: string) {
        super(name, age, inst);
        this.sport = sport
    }

    dump():void {
        super.dump()
        console.info(`name: ${this.name}, age: ${this.age}, inst: ${this.inst}, sport: ${this.sport}`);
    }
}

var cam = new CAthleteMusician('ryan', 32, 'piano', 'badminton')
cam.dump()
console.info(Person.count)