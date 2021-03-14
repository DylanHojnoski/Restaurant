
    function createHome() {
        const content = document.querySelector("#content");
        const home = document.createElement("div");
        home.setAttribute("class", "home")
        const h2 = document.createElement("h2");
        h2.textContent = "Enjoy fresh food held to the highest standard.";

        const chef = document.createElement("img");
        chef.setAttribute("src", "../dist/images/chef.jpeg");
        

        home.append(h2);
        home.append(chef);
        return home;
    }


export default createHome();