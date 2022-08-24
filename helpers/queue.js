const Node = require("./node.js");

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(value) {
        const node = new Node(value);

        if (this.head) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node
        }

        this.length++;
    }

    dequeue() {
        const current = this.head;
        this.head = this.head.next;
        this.length--;

        return current.value;
    }

    isEmpty() {
        return this.length === 0;
    }

    getHead() {
        return this.head.value;
    }

    getLength() {
        return this.length;
    }

    print() {
        let current = this.head;

        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

module.exports = Queue;