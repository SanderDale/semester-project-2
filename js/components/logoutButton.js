import { clearStorage } from './userStorage.js';

export function logoutButton() {
    
    const logoutButton = document.querySelector("#logout");

    if(logoutButton) {
        logoutButton.onclick = function() {
            const doLogout = confirm("Are you sure you want to logout?");

            if(doLogout) {
                clearStorage();
                location.href = "/";
            }
        }
    }
}