import { url } from "./constants/data.js";
import { displayProducts } from "./components/displayProducts.js";
import { searchProducts } from "./components/searchWatches.js";
import { navSlide } from './components/nav.js';

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