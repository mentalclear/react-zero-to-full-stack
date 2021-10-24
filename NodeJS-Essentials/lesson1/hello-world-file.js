const fs = require('fs');

writeFile('hello.txt', 'Hello World', (err) => {
    console.log('Done!');
})