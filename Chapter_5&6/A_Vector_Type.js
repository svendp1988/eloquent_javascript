class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

Vec.prototype.plus = function (otherVec) {
    assertVec(otherVec);
    return new Vec(this.x + otherVec.x, this.y + otherVec.y)
}

Vec.prototype.minus = function (otherVec) {
    assertVec(otherVec);
    return new Vec(this.x - otherVec.x, this.y - otherVec.y);
}

function assertVec(otherVec) {
    if (!(otherVec instanceof Vec)) {
        throw 'entered argument should be off class Vec';
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// console.log(new Vec(1, 2).plus(1));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
