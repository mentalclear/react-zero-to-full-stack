// Importing default export - old way
// const fib = require('./fibonacci-old.js');
// Importing named export - old way
// const { generateFibonacci } = require('./fibonacci-old.js');

// import generateFibonacci from './fibonacci.js'; newer import for default export
//import { generateFibonacci, sayHello } from './fibonacci.js';  two separate funcs
import * as stuff from './fibonacci.js';

const person = {
    name: {
        first: 'John',
        last: 'Doe',
    }
}



// const { name } = person || {};
// const { first, last } = name || {};

// Using optional chain from babel, requires a plugin
const first = person?.name?.first;


stuff.sayHello();
console.log(stuff.generateFibonacci(10));