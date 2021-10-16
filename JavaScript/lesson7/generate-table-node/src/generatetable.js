export function createMultiplicationTable(rows, columns) {
    let tableString = ''

    for (let rowNumber of Array(rows).keys()) {
        for (let columnNumber of Array(columns).keys()) {
            tableString = tableString + ` ${(rowNumber + 1) * (columnNumber + 1)} `
        }

        tableString = tableString + '\n'
    }

    return tableString;
}
