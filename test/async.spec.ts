import fetchProduct from "../src/async";

describe(('Async 테스트'), () => {
	it('async-done', (done) => {
		fetchProduct().then((obj) => {
			expect(obj).toEqual({ item: 'mlk', price: 200 });
			done();
		});
	});

	it('async-return', () => {
		return fetchProduct().then((obj) => {
			expect(obj).toEqual({ item: 'milk', price: 200 });
		});
	})
});