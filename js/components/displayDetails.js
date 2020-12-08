import { getCartItems } from "./getCartItems.js";

export function displayDetails(detailsToDisplay) {
    const detailsContainer = document.querySelector(".details--container");
    const detailsBanner = document.querySelector(".banner");

    const itemInCart = getCartItems();

    detailsContainer.innerHTML = "";

    let cssClass = "add";

	const doesProductExist = itemInCart.find(function (item) {
		return parseInt(item.id) === detailsToDisplay.id;
	});

	if (doesProductExist) {
        cssClass = "remove";
    }
    
    let cartStatus = "Add to cart";

    if (doesProductExist) {
        cartStatus = "Remove from cart";
    }

    detailsContainer.innerHTML += `<div class="details--image">
                                        <img src="${detailsToDisplay.image_url}">
                                    </div>
                                    <div class="details--info">
                                        <h2>${detailsToDisplay.title}</h2>
                                        <p class="description">${detailsToDisplay.description}</p>
                                        <div>
                                            <p class="price">$ ${detailsToDisplay.price}</p>
                                            <button class="addToCart ${cssClass}" data-id="${detailsToDisplay.id}" data-title="${detailsToDisplay.title}" data-image="${detailsToDisplay.image_url}" data-price="${detailsToDisplay.price}">${cartStatus}</button>
                                        </div>
                                    </div>`
    
    detailsBanner.innerHTML = `<h1 class="product-title">${detailsToDisplay.title}</h1>`;

    const addToCartButton = document.querySelectorAll(".addToCart");

    addToCartButton.forEach((button) => {
        button.addEventListener("click", handleCartClick);
    });

    function handleCartClick() {
        this.classList.toggle("remove");
        this.classList.toggle("add");

        if (this.classList == "addToCart remove") {
            this.innerText = "Remove from cart";
        } else {
            this.innerText = "Add to cart";
        };

        const id = this.dataset.id;
        const title = this.dataset.title;
        const image = this.dataset.image;
        const price = this.dataset.price;

        const currentCart = getCartItems();

        const productExists = currentCart.find(function(item) {
            return item.id === id;
        });

        if (productExists === undefined) {
            const product = { 
                id: id, 
                title: title,
                image: image, 
                price: price
            };

            currentCart.push(product);

            saveCartItems(currentCart);
        } else {
            const newCart = currentCart.filter(item => item.id !== id);

            saveCartItems(newCart);
        }
    }

    function saveCartItems(cartItems) {
        localStorage.setItem("itemsAddedToCart", JSON.stringify(cartItems));
    }
};
