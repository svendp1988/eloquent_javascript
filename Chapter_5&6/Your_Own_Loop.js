// const loop = (value, test, update, body) => {
//     let result = [];
//     for (let elt of value) {
//         if (!test(elt)) {
//             body(elt);
//         }
//         result.push(update(elt));
//     }
//     return result;
// }
//
// console.log(loop([1, 2, 3, 4, 5], n => n < 3, n => n + 1, console.log));

function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
        body(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
