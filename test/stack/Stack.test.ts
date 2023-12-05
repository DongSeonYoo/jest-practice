import { Stack } from "../../src/stack/Stack";

describe('Stack을 테스트한다', () => {
	let stack: Stack;

	beforeEach(() => {
		stack = new Stack();
	});

	it('stack의 사이즈를 체크한다', () => {
		expect(stack.checkLength()).toBe(0);
	});

	it('stack의 push는 최상위에 데이터를 쌓는다', () => {
		// given
		const number = 3;

		// when
		stack.push(number);

		// then
		expect(stack.checkLength()).toBe(1);
	});

	it('stack의 pop은 최근 데이터 하나를 삭제한다', () => {
		// given
		const expectedStack = [1, 2];

		// when
		stack.push(1);
		stack.push(2);
		stack.push(3);

		stack.pop();

		// then
		expect(stack.array).toEqual(expectedStack);
	});

	it('stack이 비어있으면 true, 아니면 false를 반환한다', () => {
		stack.push(1);

		expect(stack.isEmpty()).toBeFalsy();

		stack.pop();
		expect(stack.isEmpty()).toBeTruthy();
	});

	it('stack의 pop은 stack이 비어있을 때 에러를 던진다', () => {
		// given
		const expectedError = new Error('스택 벼있음');

		// when
		const popFunc = () => {
			stack.pop()
		};

		// then
		expect(popFunc).toThrow(expectedError);
	});

	it('stack의 peek은 stack을 변형시키지 않고 마지막 값을 리턴한다', () => {
		stack.push(3);
		stack.push(2);
		stack.push(1);

		expect(stack.peek()).toBe(1);
	});
});