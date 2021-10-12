// Defining an object
let person = {
    name: "John Doe",
    age: 45,
    sayHello: function () {
        console.log(`Hi, I'm ${this.name}`)
    }
}

person.sayHello()

// Now we can create children
let anotherPerson = Object.create(person)

console.log(anotherPerson)  // Printing just created child returns {}

// Get a prototype info
console.log("Getting prototype info: ")
console.log( Object.getPrototypeOf(anotherPerson) );

// So now anotherPerson is pretty much a clone
console.log("\n" + anotherPerson.name + " " + anotherPerson.age)
anotherPerson.sayHello()

// Chnage properties for the child 
anotherPerson.name = "Joe Schmoe"
anotherPerson.sayHello()

// adding new properties too:

anotherPerson.hairColor = "brown"
console.log(anotherPerson.hairColor)

person.age = 100
console.log(anotherPerson.age)

// But overridden will not change
person.name = "Bob Gloe"
console.log(person.name)
console.log(anotherPerson.name)


