const flatten = (nestedArray) => nestedArray.reduce((a, b) => a.concat(b));

console.log(flatten([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]));
