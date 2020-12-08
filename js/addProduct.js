import { navSlide, createNav } from "./components/nav.js";
import displayMessage from "./components/displayMessage.js";
import { getToken } from "./components/userStorage.js";
import { url } from "./constants/data.js";

createNav();
navSlide();

const form = document.querySelector("#addProduct--form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const imageUrl = document.querySelector("#image-url");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const imageUrlValue = imageUrl.value.trim();

    if(titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || imageUrlValue.length === 0) {
        return displayMessage("warning", "Please supply proper values", ".message-container");
    }

    addProduct(titleValue, priceValue, descriptionValue, imageUrlValue);
}

async function addProduct(title, price, description, imageUrl) {
    const addUrl = url;

    const data = JSON.stringify({ 
        title: title, 
        price: price, 
        description: description, 
        image_url: imageUrl
    });

    const token = getToken();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    };

    try {
        const response = await fetch(addUrl, options);
        const json = await response.json();

        if(json.created_at) {
            displayMessage("success", "New product created", ".message-container");
            form.reset();
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