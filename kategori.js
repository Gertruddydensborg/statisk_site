window.addEventListener("DOMContentLoaded", init);

const kategoriURL = "https://kea-alt-del.dk/t7/api/categories";

let kategori_template;
let kategori_container;

function init() {
  console.log("init");

  kategori_template = document.querySelector(".kategori_template");
  console.log("kategori_template", kategori_template);

  kategori_container = document.querySelector(".kategori_container");
  console.log("kategori_container", kategori_container);

  fetch(kategoriURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      visKategori(json);
    });
}

function visKategori(kategoriJSON) {
  let kategoriClone;

  kategoriJSON.forEach((kategori) => {
    console.log("kategori", kategori);
    let kategoriClone = kategori_template.cloneNode(true).content;
    kategoriClone.querySelector(".kategori_link").textContent = kategori.category;
    kategoriClone.querySelector(".kategori_link").href = "produktliste.html?category=" + kategori.category;
    kategori_container.appendChild(kategoriClone);
  });
}
// beerClone.querySelector(".beer_image").src = element.image_url;
// beerClone.querySelector(".beer_image").alt = `picture of a ${element.name} beer`;
// beerClone.querySelector(".beer_name").textContent = element.name;
// beerClone.querySelector(".beer_tagline").textContent = element.tagline;
// beerClone.querySelector(".beer_description").textContent = element.description;
