import { url } from "./constants/data.js";
import { displayProducts } from "./components/displayProducts.js";
import { searchProducts } from "./components/searchWatches.js";
import { navSlide, createNav } from "./components/nav.js";

createNav();

navSlide();

async function getProducts() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        const products = results;
        displayProducts(products);
        searchProducts(products);
    } catch (error) {
        console.log(error);
    }
}

getProducts();