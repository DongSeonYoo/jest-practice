import { add } from "../src/add";

test('1 + 2 는 3임', () => {
	expect(add(1, 2)).toBe(3);
});
