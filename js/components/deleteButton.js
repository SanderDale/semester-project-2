import { url } from '../constants/data.js';
import { getToken } from "./userStorage.js"

export function deleteButton(id) {
    const deleteContainer = document.querySelector(".delete--container");

    deleteContainer.innerHTML = `<button type="button" class="delete">Delete</button>`;

    const deleteButton = document.querySelector("button.delete");

    deleteButton.onclick = async function() {
        console.log(id);

        const doDelete = confirm("Are you sure you want to delete this product?");

        if(doDelete) {
            const deleteUrl = url + id;

            const token = getToken();

            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            try {
                const response = await fetch(deleteUrl, options);
                const json = await response.json();

                location.href="admin.html";
            }
            catch(error) {
                console.log(error);
            }
        }
    }
}