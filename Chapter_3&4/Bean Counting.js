const countBs = (string) => countChars(string, 'B');

const countChars = (string, symbol) => {
    let count = 0;
    for (let letter of string) {
        letter === symbol ? count++ : null;
    }
    return count;
}

console.log(countChars('Barbeque', 'e'));
console.log(countBs('BarBeque'));
