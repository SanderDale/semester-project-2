import { url } from "./constants/data.js";
import { displayFeatured } from "./components/displayFeatured.js";
import { navSlide, createNav } from "./components/nav.js";

createNav();

navSlide();

const homeBanner = document.querySelector(".hero--background");

const homeUrl = "url('https://strapi-upload-watches-sander.s3.eu-north-1.amazonaws.com/hero_banner_85c880fedb.jpg')";

homeBanner.style.backgroundImage = homeUrl;

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
