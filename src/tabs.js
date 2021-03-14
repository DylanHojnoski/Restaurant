import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

function createHeader() {
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Restaurant";
    const home = createTabs("Home");
    home.addEventListener("click", () => {
        content.removeChild(content.lastChild);
        content.append(createHome);
    });

    const menu = createTabs("Menu");
    menu.addEventListener("click", () => {
        content.removeChild(content.lastChild);
        content.append(createMenu);
    });

    const contact = createTabs("Contact Us");
    contact.addEventListener("click", () => {
        content.removeChild(content.lastChild);
        content.append(createContact);
    });

    header.append(h1);
    header.append(home);
    header.append(menu);
    header.append(contact);
    return header;
}

function createTabs(name) {
    const tab = document.createElement("button");
    tab.textContent = name;
    return tab;
}
export default createHeader();