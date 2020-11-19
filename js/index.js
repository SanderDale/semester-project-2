import { url } from "./constants/data.js";
import { displayFeatured } from "./components/displayFeatured.js";
 
/*const homeBannerUrl = "http://localhost:1337/home";

const homeBanner = document.querySelector(".hero--background");

async function getBanner() {
    try {
        const response = await fetch(homeBannerUrl);
        const results = await response.json();
        const banner = results;
        homeBanner.style.backgroundImage = "url('${banner.hero_banner.url}')"
    } catch (error) {
        console.log(error);
    }
}

getBanner();*/

async function getProducts() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        const products = results;
        console.log(products);
        displayFeatured(products);
    } catch (error) {
        console.log(error);
    }
}

getProducts();