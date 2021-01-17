import { getCartItems } from './getCartItems.js';

const cartItems = getCartItems();

let totalPriceContainer = document.querySelector(".total--number");

export function totalPrice(cartItems) {

    let total = 0;

    for(let i = 0; i < cartItems.length; i++) {
        const parsedItem = parseFloat(cartItems[i].price);

        total += parsedItem;
    }

    totalPriceContainer.innerHTML = "$ " + total;
}

totalPrice(cartItems);
