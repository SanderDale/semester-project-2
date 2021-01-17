import { navSlide, createNav } from "./components/nav.js";
import { displayAdminProducts } from "./components/displayAdminProducts.js";
import { url } from "./constants/data.js";
import { logoutButton } from "./components/logoutButton.js";
import { getToken } from "./components/userStorage.js";


const token = getToken();

if(!token) {
    location.href = "/";
}

createNav();
navSlide();
logoutButton();

async function getProducts() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        const products = results;
        displayAdminProducts(products);
    } catch (error) {
        console.log(error);
    }
}

getProducts();