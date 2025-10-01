const container = document.querySelector("#acceuil");


function afficher(){
container.innerHTML = "";
const nombre = document.querySelector("#nombre");
const nbr = nombre.value;
const API = `https://picsum.photos/v2/list?page=1&limit=${nbr}`
fetch(API).then(res => res.json()).then(data => {
    data.forEach(element => {
        const card = document.createElement("div");
        card.classList.add("card");
        const ima = document.createElement("img");
        ima.src = element.download_url;
        const auteur = document.createElement("p");
        auteur.textContent =` Auteur:${element.author}`;
        card.appendChild(ima);
        card.appendChild(auteur);
        container.appendChild(card);
        
    });
}) }
const btn = document.querySelector("#btn");

btn.addEventListener("click", afficher)
//afficher();