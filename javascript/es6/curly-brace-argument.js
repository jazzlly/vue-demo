const prop = "prop value";
const obj = {
    prop,
    anotherProp: "something else"
}
const objAlias = {
    prop: prop,
    anotherProp: "something else"
}
// {prop} is same as {prop: prop}

console.log("obj: ", obj);
console.log("objAlias: ", objAlias);


function createCar(name, brand, speed) {
    return {
        type: 'Car',
        name: name,
        brand: brand,
        speed: speed
    };
}

// With the new shorthand form
function createSweetCar(name, brand, speed) {
    return {
        type: 'Car',
        name,
        brand,
        speed
    }; // Yes it looks sweet.
}

function getDate() {
    return {op: 123, lhs:234, rhs: 456}
}
// old
// var tmp = getDate();
// var op  = tmp.op;
// var lhs = tmp.lhs;
// var rhs = tmp.rhs;

var {op, lhs, rhs} = getDate()
console.log(`op: ${op}, lhs: ${lhs}, rhs: ${rhs}`);