let myObj = {
    a: 1,
    b: 2,
    c: 3,
}

console.log(Object.keys(myObj));
console.log(Object.values(myObj));

console.log(Object.entries(myObj));

let obj1 = { a: 1, b: 2};
let obj2 = { c: 3, d: 4};

Object.assign(obj1, obj2)
console.log(obj1)
console.log(obj2)

// copy object:
let myObject = {
    a: 1,
    b: 2,
}

let myOtherObject = Object.assign({}, myObject);
console.log(myObject)
console.log(myOtherObject)