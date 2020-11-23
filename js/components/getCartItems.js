export function getCartItems() {
    const cartItems = localStorage.getItem("itemsAddedToCart");

    if(!cartItems) {
        return [];
    }
    else {
        return JSON.parse(cartItems);
    }
}