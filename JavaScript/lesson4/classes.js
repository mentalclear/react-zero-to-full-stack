class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let person = new Person("Henry", 45)

console.log(person)
console.log(person.name)
console.log(person.age)

// Example of private variable:
class AnotherPerson {
    constructor() {
        this._createdAt = Date.now(); // Private starts with underscore
    }
}

// Methods
class MethodicPerson {
    someMethod(arg1, arg2) {

    }
}
let person1 = new MethodicPerson()
person1.someMethod(11, true)

// Static methods:
class StaticMethodicPerson {
    static ageDiff(person1, person2) {
        return Math.abs(
            person1.age - person2.age
        );
    }
}
StaticMethodicPerson.ageDiff(person, person1) // Static can be called directly.

// Subclassing
class Employee extends Person {
    constructor(name, age, salary, jobTitle) {
        super(name, age);
        this.salary = salary;
        this.jobTitle = jobTitle;
    }
}

// Overriding is also works

// instanceof works in JS too
