const reverseArray = (array) => {
    const newArray = [];
    for (let elt of array) {
        newArray.unshift(elt);
    }
    return newArray;
}

const reverseArrayInPlace = array => {
    for (let i = 0; i <= Math.floor((array.length - 1) / 2); i++) {
        let el = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = el;
    }
    return array;
}

const array = [1, 2, 3];
const evenArray = [1, 2, 3, 4, 5, 6, 7, 8];

console.log('-----reverseArray-----');
console.log(reverseArray(array));
console.log(array);
console.log('-----reverseArrayInPlace-----');
console.log(reverseArrayInPlace(array));
console.log(array);
console.log('-----reverseArrayInPlace-----');
console.log(reverseArrayInPlace(evenArray));
console.log(evenArray);
