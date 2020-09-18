const range = (start, end, step = 1) => {
    if (!step) return;
    const result = [];
    if (start < end) {
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    } else {
        for (let i = start; i >= end; i+= step) {
            result.push(i);
        }
    }
    return result;
}

const sum = (array) => {
    let total = 0;
    for (let number of array) {
        total += number;
    }
    return total;
}

console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1))
