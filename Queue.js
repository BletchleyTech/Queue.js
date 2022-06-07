module.exports = class Queue {
    #queue;
    constructor() {
        this.#queue = [];
    }
    get size() {
        return this.#queue.length;
    }
    get isEmpty() {
        return this.#queue.length === 0;
    }
    get front() {
        return this.#getFront();
    }
    get queue() {
        return this.#queue.join(" - ");
    }
    enqueue(element) {
        this.#queue.push(element);
    }
    enqueueMany(...elements) {
        elements.flat().forEach(element => this.enqueue(element));
    }
    dequeue() {
        if (this.isEmpty)
            return "Underflow";
        return this.#queue.shift();
    }
    #getFront() {
        if (this.isEmpty)
            return "No elements in Queue";
        return this.#queue[0];
    }
}