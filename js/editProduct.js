import { navSlide, createNav } from "./components/nav.js";
import displayMessage from "./components/displayMessage.js";
import { getToken } from "./components/userStorage.js";
import { url } from "./constants/data.js";

createNav();
navSlide();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const productUrl = url + id;

const form = document.querySelector("#addProduct--form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const imageUrl = document.querySelector("#image-url");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");

(async function() {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        title.value = details.title;
        price.value = details.price;
        imageUrl.value = details.image_url;
        description.value = details.description;
        idInput.value = details.id;

        console.log(details);
    }
    catch(error) {
        console.log(error);
    }
})()

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const imageUrlValue = imageUrl.value.trim();
    const idValue = idInput.value;

    if(titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || imageUrlValue.length === 0 || idValue.length === 0) {
        return displayMessage("warning", "Please supply proper values", ".message-container");
    }

    updateProduct(titleValue, priceValue, descriptionValue, imageUrlValue, idValue);
}

async function updateProduct(title, price, description, imageUrl, id) {
    const updateUrl = url + id;

    const data = JSON.stringify({ 
        title: title, 
        price: price, 
        description: description, 
        image_url: imageUrl
    });

    const token = getToken();

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    };

    try {
        const response = await fetch(updateUrl, options);
        const json = await response.json();

        if(json.updated_at) {
            displayMessage("success", "Product updated", ".message-container");
        }

        if(json.error) {
            displayMessage("error", "Please log in to creat new products", ".message-container");
        }
        
        console.log(json);
    }
    catch(error) {
        console.log(error);
    }
}