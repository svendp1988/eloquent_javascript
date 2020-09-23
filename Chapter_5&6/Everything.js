function every(array, predicate) {
    const result = [];
    for (let elt of array) {
        if (predicate(elt)) {
            result.push(elt);
        }
    }
    return result.length === array.length;
}

function every2(array, predicate) {
    for (let elt of array) {
        if (!predicate(elt)) {
            return false;
        }
    }
    return true;
}

function everySome(array, predicate) {
    return !array.some(element => !predicate(element));
}

console.log(every([1, 2, 3], n => typeof n === 'number'));
console.log(every([1, 2, 3], n => n >= 2));
console.log(every2([1, 2, 3], n => typeof n === 'number'));
console.log(every2([1, 2, 3], n => n >= 2));
