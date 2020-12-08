import { url } from "./constants/data.js";
import { displayDetails } from "./components/displayDetails.js";
import { navSlide, createNav } from "./components/nav.js";

createNav();

navSlide();

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const detailsUrl = url + id;

async function getDetails() {
    try {
        const response = await fetch(detailsUrl);
        const results = await response.json();
        const details = results;
        displayDetails(details);
    } catch (error) {
        console.log(error);
    }
}

getDetails();