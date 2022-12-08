interface PojoIfc {
    [key: string] : any
}

const pojo1: PojoIfc = {
    foo: 'bar',
    bar: 123, 
    wahaha: <CAthleteMusician> {}
}

// console.info(pojo1)
// todo: import CAthleteMusician
// console.info(pojo1.wahaha instanceof CAthleteMusician)

// type alias
type PojoType = {
    [key: string] : any
}

const pojo2: PojoType = {
    foo: 'bar',
    bar: 123, 
    wahaha: <CAthleteMusician> {}
}

// console.info(pojo2)


const pojo3: Record<string, any> = {
    foo: 'bar',
    bar: 123, 
    wahaha: <CAthleteMusician> {}
}

console.info(pojo3)