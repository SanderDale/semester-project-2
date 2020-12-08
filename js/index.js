import { url } from "./constants/data.js";
import { displayFeatured } from "./components/displayFeatured.js";
import { navSlide, createNav } from "./components/nav.js";

createNav();

navSlide();

const homeBanner = document.querySelector(".hero--background");

homeBanner.style.backgroundImage = "url(http://localhost:1337/uploads/photo_1544085311_11a028465b03_29d7651dcc.jpeg)";

async function getProducts() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        const products = results;
        displayFeatured(products);
    } catch (error) {
        console.log(error);
    }
}

getProducts();