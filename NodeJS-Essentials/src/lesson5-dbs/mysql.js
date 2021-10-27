import mysql from 'mysql';
import fs from 'fs';
import path from 'path';


const connection = mysql.createConnection({
    host: '192.168.68.5',
    database: 'node-course-schema',
    user: 'node-course-user',
    password: process.env.MYSQL_PWD,
});

connection.connect();

fs.readFile(path.join(__dirname, 'new-products-mysql.txt'), 'utf8', (err, contents) => {
    if (err) return console.log(err);
    const productStrings = contents.split('\n');
    const products = productStrings.map((productString, i) => ({
        id: i,
        name: productString.split(',')[0],
        price: Number(productString.split(',')[1]),
    }));

    // Avoiding raw input by creating an array for the data
    const productsInArray = products.map(product => [
        product.id,
        product.name,
        product.price,
    ]);

    // Using single quotes here and ? as a placeholder for a query then providing an 
    // array to mitigate SQL Injection.    
    connection.query(
        'INSERT INTO products (id, name, price) VALUES ?',
        [productsInArray],
        (err, products) => {
            if (err) console.log(err);
            console.log("Done inserting products!");
        });

    connection.end();
});

// connection.query('SELECT * FROM products', (err, results) => {
//     if (err) console.log(err);
//     console.log("Here are the current products:");
//     console.log(results);

// });

// connection.end();