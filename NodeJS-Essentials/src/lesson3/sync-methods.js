import fs from 'fs';
import path from 'path';

// const data = fs.readFileSync(__dirname + '/example.txt', 'utf8');
// below actually works too!
//const data = fs.readFileSync(`${__dirname}/example.txt`, 'utf8');

// Reading Files:
// With path
// const data = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf8');
// console.log(data);


// Writing File  - Overwrites a file by default
fs.writeFileSync(path.join(__dirname, 'my-new-file.txt'), 'Hello!', 'utf8');
// Appending data
fs.appendFileSync(path.join(__dirname, 'my-new-file.txt'), '\nHello Again!', 'utf8');

fs.appendFileSync(path.join(__dirname, 'my-json-file.json'), JSON.stringify({ message: "Hello!" },));

// Deleting files
fs.unlinkSync(path.join(__dirname, 'my-new-file.txt'));

// fs.mkdirSync(path.join(__dirname, 'my-new-files'));
//fs.rmdirSync(path.join(__dirname, 'my-new-files'));

// creating full path ./test/my-new-files
// fs.mkdirSync(path.join(__dirname, 'test', 'my-new-files'), { recursive: true });

// const existing = fs.existsSync(path.join(__dirname, 'my-json-file.json'));
// console.log(existing);

// list dir content
const dirlist = fs.readdirSync(path.join(__dirname, 'test'));
console.log(dirlist);

// get file info
const stats = fs.lstatSync(path.join(__dirname, 'my-json-file.json'));
console.log(stats);
console.log(stats.isFile());
console.log(stats.isDirectory());