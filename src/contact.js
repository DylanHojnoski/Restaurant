
function createContact() {
    const content = document.querySelector("#content");

    const contact = document.createElement("div")
    contact.setAttribute("class", "contact");

    const list = document.createElement("ul");
    
    const location = document.createElement("li"); 
    location.textContent = "Location: New York City, New York";

    const phone = document.createElement("li"); 
    phone.textContent = "Phone number: 234-423-4776";

    const email = document.createElement("li"); 
    email.textContent = "Email: restuarant@gmail.com";

    contact.append(location);
    contact.append(phone);
    contact.append(email);
    contact.append(list);
    return contact;
}

export default createContact();