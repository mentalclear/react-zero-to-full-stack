import { createMultiplicationTable } from './generatetable'

let args = process.argv.slice(2)

let rowsInput = args[0];
let columnsInput = args[1];

let rows = Number(rowsInput);
let columns = Number(columnsInput);

if (!isNaN(rows) && !isNaN(columns) && rows !== 0 && columns !== 0) {
    let tableString = createMultiplicationTable(rows, columns);
    console.log(tableString)
} else {
    console.log("Error! Invalid input!")
}
