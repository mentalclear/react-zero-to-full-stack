// const args = process.argv.slice(2);

function generateFibonacci(howMany) {
    let x = 1;
    let y = 1;
    let sequence = [x, y];

    Array(howMany).fill().forEach(() => {
        let sum = x + y;
        sequence.push(sum);
        x = y;
        y = sum;
    });

    return sequence;
}

// Converting to Number. Otherwise treated as string
// const howMany = Number(args[0]);
// console.log(generateFibonacci(howMany));

// Old exports:

//module.exports = generateFibonacci; // Default export
module.exports.generateFibonacci = generateFibonacci; // Named export