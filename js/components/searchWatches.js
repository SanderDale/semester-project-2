import { displayProducts } from './displayProducts.js';

export function searchProducts(products) {
	const search = document.querySelector(".search");

	search.onkeyup = function filterProducts(event) {
		const searchValue = event.target.value.trim().toLowerCase();

		const filteredProducts = products.filter(function (products) {
			if (products.title.toLowerCase().includes(searchValue) || products.description.toLowerCase().includes(searchValue)) {
                return true;
            }
		});

		displayProducts(filteredProducts);
	};
}