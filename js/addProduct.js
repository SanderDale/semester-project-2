import { navSlide, createNav } from "./components/nav.js";
import displayMessage from "./components/displayMessage.js";
import { getToken } from "./components/userStorage.js";
import { url } from "./constants/data.js";

const token = getToken();

if (!token) {
	location.href = "/";
}

createNav();
navSlide();

const form = document.querySelector("#addProduct--form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const image = document.querySelector("#image");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
	event.preventDefault();

	message.innerHTML = "";

	const featured = document.querySelector("input[name='featured']:checked").value;

	const titleValue = title.value.trim();
	const priceValue = parseFloat(price.value);
	const descriptionValue = description.value.trim();
	const imageValue = image.value;
	const featuredValue = featured;

	console.log(imageValue);

	if (
		titleValue.length === 0 ||
		priceValue.length === 0 ||
		isNaN(priceValue) ||
		descriptionValue.length === 0 ||
		imageValue === null
	) {
		return displayMessage("warning", "Please supply proper values", ".message-container");
	}

	addProduct(titleValue, priceValue, descriptionValue, imageValue, featuredValue);
}

async function addProduct(title, price, description, image, featured) {
	const addUrl = url;

	const formData = new FormData();

	formData.append(
		"data",
		JSON.stringify({
			title: title,
			price: price,
			description: description,
			featured: featured,
		})
	);
	formData.append("image", image.files[0]);

	const options = {
		method: "POST",
		body: formData,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		const response = await fetch(addUrl, options);
		const json = await response.json();

		if (json.created_at) {
			displayMessage("success", "New product created", ".message-container");
			form.reset();
		}

		if (json.error) {
			displayMessage("error", "Please log in to creat new products", ".message-container");
		}

		console.log(json);
	} catch (error) {
		console.log(error);
	}
}
