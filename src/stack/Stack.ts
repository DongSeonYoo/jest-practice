export class Stack {
	private _array: any[];
	constructor() {
		this._array = [];
	}

	get array(): any {
		return this._array;
	}

	isEmpty(): boolean {
		return this._array.length === 0;
	}

	checkLength(): number {
		return this.array.length;
	}

	push(number: number): void {
		this.array.push(number);
	}

	pop(): void {
		if (this.isEmpty()) {
			throw new Error('스택 벼있음');
		}

		this.array.pop();
	}

	peek() {
		return this.array[this.checkLength() - 1];
	}
}
