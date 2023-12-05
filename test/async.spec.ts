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
	});

	it('async-await', async () => {
		const product = await fetchProduct();

		expect(product).toEqual({ item: 'milk', price: 200 });
	});

	it('async-resolve를 테스트한다', () => {
		return expect(fetchProduct()).resolves.toEqual({
			item: 'milk', price: 200
		});
	});

	it('async-reject를 테스트한다', () => {
		return expect(fetchProduct('error')).rejects.toBe('에러요');
	});
});