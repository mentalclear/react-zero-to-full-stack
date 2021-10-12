let Car = function(make, color){
    this.make = make;
    this.color = color;
}

console.log(Car("one", "two"))

console.log(make + " " + color)

let myCar = new Car("chevy", "grey")
console.log(myCar.make)
console.log(myCar.color)
console.log(myCar)