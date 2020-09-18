const isEven = (number) => {
    if (Math.abs(number) === 0) {
        return true;
    } else if (Math.abs(number) === 1) {
        return false;
    }
    return isEven(number - 2);
}

console.log(isEven(50));
console.log(isEven(75));

console.log(isEven(-1));
