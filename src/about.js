export const about = function () {
    const content = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.textContent = "About Us";
    content.appendChild(h1);

    const aboutContent = document.createElement("div");
    aboutContent.classList.add("about-content");
    content.appendChild(aboutContent);

    const aboutDiv = document.createElement("div");
    aboutDiv.setAttribute("class", "about-div");
    aboutDiv.textContent =
        "Childhood's opened in 2024 as a way for the owner to share his favorite childhood meals with the rest of the world.";
    aboutContent.appendChild(aboutDiv);

    const contactDiv = document.createElement("div");
    contactDiv.textContent =
        "If you'd like to make a reservation, hear about our catering options, or suggest YOUR favorite childhood meals, give us a call!";
    contactDiv.setAttribute("class", "about-div");
    aboutContent.appendChild(contactDiv);

    const phoneNum = document.createElement("div");
    phoneNum.textContent = "1-120-601-0706";
    phoneNum.setAttribute("class", "phone-num");
    aboutContent.appendChild(phoneNum);

    const img = document.createElement("img");
    img.classList.add("about-img");
    img.src =
        "https://images.unsplash.com/photo-1589227365533-cee630bd59bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    img.alt = "cutting board with vegetables";
    aboutContent.appendChild(img);
};
