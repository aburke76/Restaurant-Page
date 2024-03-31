export const about = function () {
    const content = document.querySelector("#content");

    const aboutDiv = document.createElement("div");

    content.appendChild(
        (aboutDiv.textContent =
            "Childhood's opened in 2024 as a way for the owner to share his favorite childhood meals with the rest of the world.")
    );
};
