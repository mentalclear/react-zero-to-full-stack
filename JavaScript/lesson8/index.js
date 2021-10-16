// Resolved promise
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
    }, 1000)
});

myPromise.then(message => {
    console.log(message)
});

// Rejected promise
let myRejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error!!1");
    }, 1000)
});

myRejectedPromise.then(message => {
    console.log(message)
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log("I'm done!");
});