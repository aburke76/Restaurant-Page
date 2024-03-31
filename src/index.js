import "./styles.css";
import { homePage } from "./home.js";
import { menu } from "./menu.js";

const content = document.querySelector("#content");
const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

homeBtn.setAttribute("id", "active");
homePage();

homeBtn.addEventListener("click", () => {
    while (content.lastChild) {
        content.lastChild.remove();
    }
    menuBtn.removeAttribute("id", "active");
    homeBtn.setAttribute("id", "active");
    homePage();
});

menuBtn.addEventListener("click", () => {
    while (content.lastChild) {
        content.lastChild.remove();
    }
    homeBtn.disabled = false;
    homeBtn.removeAttribute("id", "active");
    menuBtn.setAttribute("id", "active");
    menu();
});
