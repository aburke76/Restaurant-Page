export const homePage = function () {
    const content = document.querySelector("#content");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const homeBtn = document.querySelector(".home");

    homeBtn.disabled = true;

    h1.innerHTML = `Welcome to <span>Childhood's</span>`;
    h2.textContent = "Eating Here is Like Growing Up With Me!";

    img.src =
        "https://images.unsplash.com/photo-1578496780896-7081cc23c111?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    img.alt = "family at table";

    content.appendChild(h1);
    content.appendChild(h2);
    content.appendChild(img);
};
