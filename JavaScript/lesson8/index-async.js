function doSomething() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success!");
        }, 1000)
    });
}

async function execute() {
    try {
        let message = await doSomething();
        console.log(message)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("I'm done!")
    }
}

execute()

// myPromise.then(message => {
//     console.log(message)
// }).catch(error => {
//     console.log(error);
// }).finally(() => {
//     console.log("I'm done!");
// });