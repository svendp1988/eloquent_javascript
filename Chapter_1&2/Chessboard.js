const size = 8;
const symbol = '#';
const space = ' ';
let string = '';

for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
        (i + j) % 2 === 0
            ? string += symbol
            : string += space;
    }
    console.log(string);
    string = '';
}
