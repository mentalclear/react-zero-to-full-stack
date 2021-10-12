function myFunc() {
    var x = "Function scoped";
    let y = "block scoped"

    //console.log(x);
    console.log(y)
}

//myFunc();

//console.log(x);
//console.log(y);

// But that for function. Now for if statment:

if(true){
    var x = "Function scoped";
    let y = "block scoped"

    console.log(x);
    console.log(y)
}

console.log(x);
console.log(y);