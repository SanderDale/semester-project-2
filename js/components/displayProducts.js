export function displayProducts(productsToDisplay) {
    const productCardsContainer = document.querySelector(".product-cards--container");

    productCardsContainer.innerHTML = "";

    productsToDisplay.forEach(function (items) {

        productCardsContainer.innerHTML += `<a class="product-card--link" href="details.html?id=${items.id}">
                                                <div class="product-card">
                                                <img src="${items.image_url}" alt="${items.image.alternativeText}">
                                                <h4>${items.title}</h4>
                                                <p>$ ${items.price}</p>
                                                </div>
                                            </a>`
    });
}