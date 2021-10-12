// in JS this refers to the current execution context
let introduceYourself = function () {
    return `Hi, my name is ${this.name}`
}

console.log(introduceYourself());

let person = {
    name: "John Doe",
    introduceYourself,
}

console.log(person.introduceYourself());

let setName = function() {
    this.name = "NAME!!";
}

person.setName = setName 
person.setName()
console.log(person)
