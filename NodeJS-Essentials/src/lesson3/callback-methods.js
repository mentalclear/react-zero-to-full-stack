import fs from 'fs';
import path from 'path';

// const data = fs.readFileSync(__dirname + '/example.txt', 'utf8');
// below actually works too!
//const data = fs.readFileSync(`${__dirname}/example.txt`, 'utf8');

// Reading Files:
// With path
// const data = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf8');
// console.log(data);
// fs.readFile(path.join(__dirname, 'example.txt'), 'utf8', (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
// });




// // Writing File  - Overwrites a file by default
// fs.writeFileSync(path.join(__dirname, 'my-new-file.txt'), 'Hello!', 'utf8');

// fs.writeFile(path.join(__dirname, 'my-new-file.txt'), 'Hello!', (err) => {
//     if (err) console.log(err);
//     console.log("Done writing the file!");

// });

// // Appending data
// fs.appendFileSync(path.join(__dirname, 'my-new-file.txt'), '\nHello Again!', 'utf8');

// fs.appendFileSync(path.join(__dirname, 'my-json-file.json'), JSON.stringify({ message: "Hello!" },));

// fs.appendFile(path.join(__dirname, 'my-new-file.txt'), '\nGoodbye!', (err) => {
//     if (err) console.log(err);
//     console.log("Done writing the file!");
// });

// // Deleting files
// fs.unlinkSync(path.join(__dirname, 'my-new-file.txt'));
// fs.unlink(path.join(__dirname, 'my-new-file.txt'), (err) => {
//     if (err) console.log(err);
//     console.log("File deleted!");
// });


// // fs.mkdirSync(path.join(__dirname, 'my-new-files'));
// //fs.rmdirSync(path.join(__dirname, 'my-new-files'));

// // creating full path ./test/my-new-files
// // fs.mkdirSync(path.join(__dirname, 'test', 'my-new-files'), { recursive: true });

// // const existing = fs.existsSync(path.join(__dirname, 'my-json-file.json'));
// // console.log(existing);

// // list dir content
// const dirlist = fs.readdirSync(path.join(__dirname, 'test'));
// console.log(dirlist);

// // get file info
// const stats = fs.lstatSync(path.join(__dirname, 'my-json-file.json'));
// console.log(stats);
// console.log(stats.isFile());
// console.log(stats.isDirectory());

// To have an order in execution: 
fs.writeFile(path.join(__dirname, 'my-new-file.txt'), 'Hello callbacks!', (err) => {
    if (err) console.log(err);
    console.log("Done writing the file!");
    fs.readFile(path.join(__dirname, 'my-new-file.txt'), 'utf8', (err, data) => {
        if (err) console.log(err);
        console.log(data);
        fs.unlink(path.join(__dirname, 'my-new-file.txt'), (err) => {
            if (err) console.log(err);
            console.log("File deleted!");
        });
    });
});



