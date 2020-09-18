function deepEqual(valueA, valueB) {
    if (valueA === valueB) return true;


    if (valueA === null || typeof valueA !== 'object'
        || valueB === null || typeof valueB !== 'object') return false;

    const keysA = Object.keys(valueA), keysB = Object.keys(valueB);

    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(valueA[key], valueB[key])) {
            return false;
        }
    }

    return true;
}

const objectA = {
    a: 1,
    b: 2,
    c: 3
};
const objectB = {
    a: 1,
    b: 2,
    c: 3
};
const objectC = {
    a: 4,
    b: 5,
    c: 6
};
const aNumber = 2;

console.log(deepEqual(objectA, objectB));
console.log(deepEqual(objectA, objectA));
console.log(deepEqual(objectA, objectC));
console.log(deepEqual(objectC, objectB));
console.log(deepEqual(objectA, aNumber));
