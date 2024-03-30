export const homePage = function () {
    const content = document.querySelector("#content");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const img2 = document.createElement("img");
    const img3 = document.createElement("img");
    const homeBtn = document.querySelector(".home");

    homeBtn.disabled = true;

    h1.innerHTML = `Welcome to <span>Childhood's</span>`;
    h2.textContent = "Eating Here is Like Growing Up With Me!";

    imgContainer.setAttribute("id", "img-container");

    img.setAttribute("id", "main-img");
    img2.setAttribute("id", "side-img1");
    img3.setAttribute("id", "side-img2");

    img.src =
        "https://images.unsplash.com/photo-1578496780896-7081cc23c111?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    img.alt = "family at table";

    img2.src =
        "https://images.unsplash.com/photo-1611765083444-a3ce30f1c885?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    img2.alt = "family toast with wine";

    img3.src =
        "https://plus.unsplash.com/premium_photo-1672199330041-32774b5ae17c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    img3.alt = "thanksgiving feast";

    imgContainer.appendChild(img2);
    imgContainer.appendChild(img);
    imgContainer.appendChild(img3);
    content.appendChild(h1);
    content.appendChild(h2);

    content.appendChild(imgContainer);
};
