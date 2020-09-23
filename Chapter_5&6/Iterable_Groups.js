class Group {
    constructor() {
        this.members = [];
    }

    has(value) {
        return this.members.includes(value);
    }

    add(value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    }

    delete(value) {
        this.members = this.members.filter(v => v !== value);
    }

    static from(collection) {
        let newGroup = new Group();
        for (let elt of collection) {
            newGroup.add(elt);
        }
        return newGroup;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if (this.position >= this.group.members.length) {
            return {done: true};
        } else {
            let result = {value: this.group.members[this.position], done: false};
            this.position++;
            return result;
        }
    }
}
