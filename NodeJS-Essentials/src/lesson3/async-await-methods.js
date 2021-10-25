import fsBase from 'fs';
const fs = fsBase.promises;
import path from 'path';

// With Promises

// fs.readFile(path.join(__dirname, 'example.txt'), 'utf8')
//     .then(result => console.log(result))
//     .catch(err => console.log(err));

// With Async and Await

const exec = async () => {
    const data = await fs.readFile(path.join(__dirname, 'example.txt'), 'utf8');
    console.log(data);
}

//exec();

// Full sequence = write, read, delete

const file_of_interest = path.join(__dirname, 'my-new-file.txt');

const read_write_delete = async () => {
    await fs.writeFile(file_of_interest, 'Hello There!');
    const data = await fs.readFile(file_of_interest, 'utf8');
    console.log(data);
    await fs.unlink(file_of_interest)
}

read_write_delete();
