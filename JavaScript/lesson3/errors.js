try {
    throw "Ah! An Error!"
} catch (err) {
    console.log(err)
} finally {
    console.log("it happens...")
}

