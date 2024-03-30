import "./styles.css";
import { homePage } from "./home.js";
import { menu } from "./menu.js";

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

homeBtn.setAttribute("id", "active");
homePage();

homeBtn.addEventListener("click", () => {
    homeBtn.setAttribute("id", "active");
    homePage();
});
