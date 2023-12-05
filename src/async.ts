export default function fetchProduct(error?: string) {
	if (error === 'error') {
		return Promise.reject('에러요');
	}

	return Promise.resolve({ item: 'milk', price: 200 });
}
