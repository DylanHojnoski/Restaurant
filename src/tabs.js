
function createHeader() {
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Restaurant";
    const home = createTabs("Home");
    const menu = createTabs("Menu");
    const contact = createTabs("Contact Us");

    header.append(h1);
    header.append(home);
    header.append(menu);
    header.append(contact);
    content.append(header);
}

function createTabs(name) {
    const tab = document.createElement("button");
    tab.textContent = name;
    return tab;
}
export default createHeader();