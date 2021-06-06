export function displayFeatured(featuredToDisplay) {
	const featuredCardContainer = document.querySelector(".featured-items--card--container");

	featuredCardContainer.innerHTML = "";

	const filteredItems = featuredToDisplay.filter(filterItems);

	function filterItems(featuredItems) {
		if (featuredItems.featured) {
			return true;
		}
	}

	filteredItems.forEach(function (items) {
		featuredCardContainer.innerHTML += `<a class="product-card--link" href="details.html?id=${items.id}">
                                                <div class="featured-items-card">
                                                    <img src="${items.image.url}">
                                                    <h4>${items.title}</h4>
                                                    <p>${items.description}</p>
                                                    <p>$ ${items.price}</p>
                                                </div>
                                            </a>`;
	});
}
