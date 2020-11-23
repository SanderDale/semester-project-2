import { getCartItems } from "./getCartItems.js";

export function displayDetails(detailsToDisplay) {
    const detailsContainer = document.querySelector(".details--container");
    const detailsBanner = document.querySelector(".banner")

    detailsContainer.innerHTML = "";

    detailsContainer.innerHTML += `<div class="details--image">
                                        <img src="${detailsToDisplay.image_url}" alt="${detailsToDisplay.image.alternativeText}">
                                    </div>
                                    <div class="details--info">
                                        <h2>${detailsToDisplay.title}</h2>
                                        <p class="description">${detailsToDisplay.description}</p>
                                        <div>
                                            <p class="price">$ ${detailsToDisplay.price}</p>
                                            <button class="addToCart add" data-id="${detailsToDisplay.id}" data-title="${detailsToDisplay.title}" data-description="${detailsToDisplay.description}" data-image="${detailsToDisplay.image_url}" data-price="${detailsToDisplay.price}">Add to cart</button>
                                        </div>
                                    </div>`
    
    detailsBanner.innerHTML = `<h1 class="product-title">${detailsToDisplay.title}</h1>`;
    
    const addToCartButton = document.querySelectorAll(".addToCart");

    addToCartButton.forEach((button) => {
        button.addEventListener("click", handleCartClick);
    });

    function handleCartClick(event) {
        this.classList.toggle("remove");
        this.classList.toggle("add");

        const id = this.dataset.id;
        const title = this.dataset.title;
        const description = this.dataset.description;
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
                description: description, 
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
