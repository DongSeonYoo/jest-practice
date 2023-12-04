import { Calculator } from "../src/Calculator"

describe('Calculator 테스트코드 작성할겁니다', () => {
	let cal;

	beforeEach(() => {
		cal = new Calculator();
	});

	it('init with 0', () => {
		expect(cal.value).toBe(0);
	});

	it('set메서드 테슽흐', () => {
		cal.set(9);

		expect(cal.value).toBe(9);
	});

	it('clear하면 value는 0이 되어야함', () => {
		cal.clear();

		expect(cal.value).toBe(0);
	});

	it('add는 더하기함수입니다', () => {
		cal.set(3);
		cal.add(2);

		expect(cal.value).toBe(5);
	});

	it('divide는 나누기요', () => {
		cal.set(8);
		cal.divide(2);

		expect(cal.value).toBe(4);
	});

	it('divide함수에 0이 들어오면 1로 초기화됨', () => {
		cal.set(4);
		cal.divide(0);

		expect(cal.value).toBe(4);
	});

	it('subtract는 빼기요', () => {
		cal.set(5);
		cal.subtract(2);

		expect(cal.value).toBe(3);
	});

	it('multifly는 곱셈입미다', () => {
		cal.set(2);
		cal.multifly(3);

		expect(cal.value).toBe(6);
	});
});
