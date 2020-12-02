import { getCartItems } from './getCartItems.js';

const cartItems = getCartItems();

export function totalPrice(cartItems) {
    let total = 0;

    for (let i = 0; i < cartItems.length; i++) {
        total = total + (cartItems[i].quantity + cartItems[i].price);
    }
    
    return total;
}

totalPrice(cartItems);
