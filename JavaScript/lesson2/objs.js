let person = {
    name: "Jane Doe",
    age: 35,
    eyeColor: "brown",
};

let new_person = person
person.age = 36

console.log(person["age"])
console.log(new_person["age"])

let person_name = "Dana"
let age = 22;

let girl_object = {
    person_name,     // equivalent to person_name: person_name 
    age             // equivalent to age: age 
}

console.log(girl_object)

let dev_person = {
    "work-type": "software developer"
}
console.log(dev_person["work-type"])

let value = null
console.log(typeof value) // object
