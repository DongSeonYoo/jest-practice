type Node = {
	readonly value: number;
	readonly next: Node | null;
}

export class Stack {
	// private _array: any[];
	private _size: number;
	private head: Node | null;

	constructor() {
		this._size = 0;
		this.head = null;
	}

	size() {
		return this._size;
	}

	push(value: number) {
		const node = { value, next: this.head };
		this.head = node;
		this._size++;
	}

	pop() {
		if (this.head === null) {
			throw new Error('스택 벼있음');
		}

		const node = this.head;
		this.head = node.next;
		this._size--;
	}

	isEmpty() {
		return this.head === null;
	}

	peek() {
		if (this.head === null) {
			throw new Error('스택 벼있음');
		}

		return this.head.value;
	}
}
