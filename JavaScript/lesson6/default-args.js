// Default values provided like this
let myFunc = (x = "default", y = 100) => {

}

// Example
let defaultArgs = (arg1 = "Hello", arg2=3, arg3= true) => ({
    arg1,
    arg2,
    arg3
})

console.log(defaultArgs())
console.log(defaultArgs("Goodbye"))