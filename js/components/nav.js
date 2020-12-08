import { getUsername } from "./userStorage.js";

export function createNav() {

    const { pathname } = document.location;

    const username = getUsername();

    let authLink = `<a class="${pathname === "/login.html" ? "active" : ""}" href="login.html"><i class="fas fa-user"></i>Login</a>`;

    if(username) {
        authLink = `<a class="${pathname === "/admin.html" ? "active" : ""}" href="admin.html"><i class="fas fa-user"></i>Admin Panel</a> `
    }

    const navContainer = document.querySelector(".nav--container");

    navContainer.innerHTML = `<nav class="navigation">
                                    <ul class="nav-links">
                                        <li><a class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}" href="index.html">Home</a></li>
                                        <li><a class="${pathname === "/products.html" ? "active" : ""}" href="products.html">Products</a></li>
                                        <li class="logo-link"><a class="logo-link" href="index.html"><img class="logo-img" src="images/logo.png" alt="logo"></a></li>
                                        <li>${authLink}</li>
                                        <li><a class="${pathname === "/cart.html" ? "active" : ""}" href="cart.html"><i class="fas fa-shopping-cart"></i>Cart</a></li>
                                    </ul>
                                    <div class="mobile-nav">
                                        <div class="logo-responsive"><a href="index.html"><img class="logo-img" src="images/logo.png" alt="logo"></a></div>
                                        <div class="burger">
                                            <div class="line1"></div>
                                            <div class="line2"></div>
                                            <div class="line3"></div>
                                        </div>
                                    </div>
                                </nav>`

    const footerNav = document.querySelector(".navigation--footer");

    footerNav.innerHTML = ` <nav class="navigation">
                                <ul class="nav-links">
                                    <li><a class="${pathname === "/index.html" ? "active" : ""}" href="index.html">Home</a></li></li>
                                    <li><a class="${pathname === "/products.html" ? "active" : ""}" href="products.html">Products</a></li>
                                    <li>${authLink}</li>
                                    <li><a class="${pathname === "/cart.html" ? "active" : ""}" href="cart.html"><i class="fas fa-shopping-cart"></i>Cart</a></li>
                                </ul>
                            </nav>`
}

export function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = "";
            }   else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${index/4+0.5}s`;
            }
        });

        burger.classList.toggle("toggle");
    });
}