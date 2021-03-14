import createHeader from "./tabs.js";
import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

const content = document.querySelector("#content");
content.append(createHeader);
content.append(createHome);
