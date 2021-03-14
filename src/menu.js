
function createMenu() {
    const content = document.querySelector("#content");
    let menuItems = [{name: "Chicken tenders", price: 9.99},
                     {name: "Hamburger", price: 11.99},
                     {name: "Pulled Pork Sandwhich", price: 12.99},
                     {name: "Hamburger", price: 11.99},
                     {name: "Pulled Pork Sandwhich", price: 12.99},
                     {name: "Hamburger", price: 11.99},
                     {name: "Pulled Pork Sandwhich", price: 12.99},
                     {name: "Hamburger", price: 11.99},
                     {name: "Pulled Pork Sandwhich", price: 12.99},
                     {name: "Hamburger", price: 11.99},
                     {name: "Pulled Pork Sandwhich", price: 12.99},
                     {name: "Pulled Pork Sandwhich", price: 12.99},];
    
    const menu = document.createElement("div");
    menu.setAttribute("class", "menu");
    const header = document.createElement("h2");
    header.textContent = "Menu";
    menu.append(header);
    for(let i = 0; i < menuItems.length; i++)
    {
        const item = document.createElement("div");
        item.textContent = `${menuItems[i].name} .... $${menuItems[i].price}`;
        item.setAttribute("class", "menuItem");

        menu.append(item);
    }
    return menu;
}

export default createMenu(); 