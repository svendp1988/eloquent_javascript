let map = {
    a: 1,
    b: 2,
    c: 3,
    hasOwnProperty: false
};

console.log(map.hasOwnProperty);
console.log(Object.hasOwnProperty.call(map, 'hasOwnProperty'));
