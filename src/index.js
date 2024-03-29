import "./styles.css";
import { homePage } from "./home.js";
import { menu } from "./menu.js";

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

homeBtn.classList.add("active");
homePage();

homeBtn.addEventListener("click", () => {
    homeBtn.classList.add("active");
    homePage();
});
