let person = {
    name: "John",
    age: 29,
    hairColor: "brown",
    eyeColor: "brown"
}

// Object distructurizations

let {name: personName, age, hairColor } = person

console.log(hairColor)

let newPerson = {
    ...person,
    bodyMeasurments: {
        height: 69.1,
        waist: 40.2,
        shoeSize: 11,
    }
}

console.log(newPerson)

// destructurizing for elements with multuiple properties
let { bodyMeasurments: { height }} = newPerson

console.log(height)