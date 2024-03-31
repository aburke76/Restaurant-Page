export const menu = function () {
    const content = document.querySelector("#content");

    const appContainer = document.createElement("div");
    const entContainer = document.createElement("div");
    const desContainer = document.createElement("div");
    appContainer.setAttribute("class", "food-container");
    entContainer.setAttribute("class", "food-container");
    desContainer.setAttribute("class", "food-container");
    const h1 = document.createElement("h1");
    const appH2 = document.createElement("h2");
    const entH2 = document.createElement("h2");
    const desH2 = document.createElement("h2");

    h1.textContent = "Menu";
    content.appendChild(h1);
    content.appendChild(appContainer);
    appH2.textContent = "Appetizers";
    appContainer.appendChild(appH2);

    function createMenuItem(food, desc, price) {
        const itemContainer = document.createElement("div");
        itemContainer.setAttribute("id", "item-container");
        const item = document.createElement("div");
        const cost = document.createElement("div");
        const itemAndPrice = document.createElement("div");
        itemAndPrice.setAttribute("class", "item-price");
        const itemDesc = document.createElement("div");

        item.textContent = food;
        cost.textContent = `$${price}`;

        item.style.fontWeight = "900";
        cost.style.fontWeight = "900";

        itemAndPrice.appendChild(item);
        itemAndPrice.appendChild(cost);

        itemContainer.appendChild(itemAndPrice);

        itemDesc.textContent = desc;
        itemContainer.appendChild(itemDesc);

        return itemContainer;
    }

    const apps = [
        createMenuItem(
            "Boereg",
            "six pieces of layered phyllo dough and brick cheese",
            "7"
        ),
        createMenuItem(
            "Bread Sticks",
            "six sourdough breadsticks, with your choice of dipping sauce",
            "5"
        ),
        createMenuItem(
            "Cracker Platter",
            "a dozen wheat crackers topped with yellow mustard",
            "5"
        ),
        createMenuItem(
            "Spinach-Artichoke Dip",
            "served with blue corn tortilla chips",
            "10"
        ),
    ];

    const entrees = [
        createMenuItem(
            "Summer Pasta",
            "penne in red sauce with grilled sausage, peppers, and onions",
            "15.98"
        ),
        createMenuItem(
            "French Onion Soup",
            "if you need a description, order something else",
            "7.50"
        ),
        createMenuItem(
            "Sharon's Spaghetti and Meatballs",
            "again, this is self-explanatory",
            "13.22"
        ),
        createMenuItem(
            "Hamburger Pizza",
            "12-inch pizza with a mustard and ketchup sauce, pickles, onions, topped with cheddar cheese, bacon, and hamburger",
            "2"
        ),
    ];

    const desserts = [
        createMenuItem(
            "Banana Pudding",
            "vanilla cookies layered with bananas and vanilla pudding",
            "10.48"
        ),
        createMenuItem(
            "Texas Sheet Cake",
            "thin fudgy chocolate cake with chocolate icing",
            "1mil"
        ),
        createMenuItem("Cheesecake", "a slice of cheesecake, obviously", "6"),
        createMenuItem(
            "Sandwich Cookie",
            "1000 chocolate cookies with cream filling",
            "1.60"
        ),
    ];

    apps.forEach((el) => {
        appContainer.appendChild(el);
    });

    entH2.textContent = "Entrees";
    entContainer.appendChild(entH2);
    content.appendChild(entContainer);
    entrees.forEach((el) => {
        entContainer.appendChild(el);
    });

    desH2.textContent = "Desserts";
    desContainer.appendChild(desH2);
    content.appendChild(desContainer);
    desserts.forEach((el) => {
        desContainer.appendChild(el);
    });
};
