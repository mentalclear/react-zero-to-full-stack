let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//let evens = arr.filter(x=> x % 2 === 0);

// or 
let isEven = x => x % 2 === 0;
let evens = arr.filter(isEven);

console.log(evens)
