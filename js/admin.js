import { navSlide, createNav } from "./components/nav.js";
import { displayAdminProducts } from "./components/displayAdminProducts.js";
import { url } from "./constants/data.js";

createNav();
navSlide();

async function getProducts() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        const products = results;
        displayAdminProducts(products);
        console.log(products);
    } catch (error) {
        console.log(error);
    }
}

getProducts();