export default class Queue<T> {
	#queue: Array<T>;
	#type: string;
	constructor(queue?: Queue<T>) {
		this.#queue = queue ? queue.#queue : [];
		this.#type = queue ? queue.#type : "";
	}
	get size(): number {
		return this.#queue.length;
	}
	get isEmpty(): boolean {
		return this.size === 0;
	}
	get front(): T {
		return this.#getFront();
	}
	get queue(): string {
		return this.#toString();
	}
	get type(): string {
		return this.#type;
	}
	enqueue(element: T): void {
		if (this.isEmpty && !this.#type) this.#type = typeof element;
		if (typeof element !== this.#type) throw new Error("Invalid type");
		this.#queue.push(element);
	}
	enqueueMany(...elements: Array<T>): void {
		elements.forEach(element => this.enqueue(element));
	}
	dequeue(): T {
		const item = this.#queue.shift();
		if (item === undefined) throw new Error("Underflow");
		return item;
	}
	#toString(): string {
		return this.#queue.join(" - ");
	}
	#getFront(): T {
		if (this.isEmpty) throw new Error("Underflow");
		return this.#queue[0];
	}
}