export default class Queue {
    #queue;
    #type;
    constructor(queue) {
        this.#queue = queue ? queue.#queue : [];
        this.#type = queue ? queue.#type : "";
    }
    get size() {
        return this.#queue.length;
    }
    get isEmpty() {
        return this.size === 0;
    }
    get front() {
        return this.#getFront();
    }
    get queue() {
        return this.#toString();
    }
    get type() {
        return this.#type;
    }
    enqueue(element) {
        if (this.isEmpty && !this.#type)
            this.#type = typeof element;
        if (typeof element !== this.#type)
            throw new Error("Invalid type");
        this.#queue.push(element);
    }
    enqueueMany(...elements) {
        elements.forEach(element => this.enqueue(element));
    }
    dequeue() {
        const item = this.#queue.shift();
        if (item === undefined)
            throw new Error("Underflow");
        return item;
    }
    #toString() {
        return this.#queue.join(" - ");
    }
    #getFront() {
        if (this.isEmpty)
            throw new Error("Underflow");
        return this.#queue[0];
    }
}
