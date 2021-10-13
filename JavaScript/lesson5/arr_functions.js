let numbers = [1, 2, 3, 4, 5];
console.log(numbers.splice(2, 1))
console.log(numbers)

numbers.splice(2, 0, 100);
console.log(numbers)

console.log(numbers.indexOf(100))

// finds first element
numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.find(x => x > 4)); // Returns first elem found

// finds elements per filter
console.log(numbers.filter(x => x > 4));

// Returning even numbers 
console.log(numbers.filter(x => x % 2 === 0));
console.log(numbers)

// map changes all elements 
console.log(numbers.map(x => x*2))

