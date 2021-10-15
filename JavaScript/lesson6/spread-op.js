// Spread operator for objects

let obj1 = { "one1": "one", "two1": "two"}
let obj2 = { "one2": "one", "two2": "two"}
let obj3 = { "one1": "one3", "two3": "two"}

let combined = {
    ...obj1,
    ...obj2,
    ...obj3,         // This one overrides the value for "one1" provided by the object obj1
    "three": "three"
}

console.log(combined)

// Spread operator for arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combiarray = [
    ...arr1,
    ...arr2,
]

console.log(combiarray)
