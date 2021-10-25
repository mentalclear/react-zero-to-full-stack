"use strict";

// const args = process.argv.slice(2);
function generateFibonacci(howMany) {
  var x = 1;
  var y = 1;
  var sequence = [x, y];
  Array(howMany).fill().forEach(function () {
    var sum = x + y;
    sequence.push(sum);
    x = y;
    y = sum;
  });
  return sequence;
} // Converting to Number. Otherwise treated as string
// const howMany = Number(args[0]);
// console.log(generateFibonacci(howMany));
// Old exports:
//module.exports = generateFibonacci; // Default export


module.exports.generateFibonacci = generateFibonacci; // Named export