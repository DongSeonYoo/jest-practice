export class Calculator {
	public value: number;

	constructor() {
		this.value = 0
	}

	set(num: number) {
		this.value = num;
	}

	clear() {
		this.value = 0;
	}

	add(number: number) {
		this.value += number;
	}

	multifly(number: number) {
		this.value *= number;
	}

	divide(number: number) {
		if (number === 0) number = 1;
		this.value /= number;
	}

	subtract(number: number) {
		this.value -= number;
	}
}