import { getCartItems } from './components/getCartItems.js';
import { totalPrice } from './components/totalPrice.js'
import { navSlide } from './components/nav.js';

navSlide();

const cartItems = getCartItems();

const productContainer = document.querySelector(".cart-items--container");

const totalContainer = document.querySelector(".total--container");

const cartTitlesContainer = document.querySelector(".cart-titles--container");

function createCart(cartItems) {
    if (cartItems.length === 0) {
        cartTitlesContainer.outerHTML = "";
        totalContainer.innerHTML = "";
        productContainer.innerHTML = `<p class="no-items-cart">There are no items in your cart</p>`
    } else {
        cartItems.forEach((item) => {
            productContainer.innerHTML += `<div class="product--container">
                                                <div class="product-image">
                                                    <img src="${item.image}" alt="">
                                                </div>
                                                <div class="product-title">
                                                    <h4>${item.title}</h4>
                                                </div>
                                                <div class="details-link">
                                                    <a href="details.html?id=${item.id}">Details</a>
                                                </div>
                                                <div class="remove-from-cart">
                                                    <div class="remove-from-cart--button" data-id="${item.id}">
                                                        <p>Remove</p>
                                                        <i class="fas fa-times"></i>
                                                    </div>
                                                </div>
                                                <div class="product-price">
                                                    <p>$ ${item.price}</p>
                                                </div>
                                            </div>`
        });
    }

}

createCart(cartItems);

const removeButton = document.querySelectorAll(".remove-from-cart--button");

removeButton.forEach((button) => {
    button.addEventListener("click", handleRemoveClick);
});

function handleRemoveClick() {
    const id = this.dataset.id;

    const currentCart = getCartItems();

    const productExists = currentCart.find(function(item) {
        return item.id === id;
    });

    if (productExists === undefined) {
        const product = { 
            id: id
        };

        currentCart.push(product);

        saveCartItems(currentCart);
    } else {
        const newCart = currentCart.filter(item => item.id !== id);

        saveCartItems(newCart);
    }
    location.reload();
}

function saveCartItems(cartItems) {
    localStorage.setItem("itemsAddedToCart", JSON.stringify(cartItems));
    
}

//totalPrice(cartItems);