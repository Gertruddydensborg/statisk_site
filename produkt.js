//https://kea-alt-del.dk/t7/api/products/1163

const parametre = new URLSearchParams(window.location.search);
const id = parametre.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((res) => res.json())
  .then(vis);

const temp = document.querySelector("template").content;
const parent = document.querySelector("section");

function vis(data) {
  console.log(data[0]);
  document.querySelector("h3").textContent = data[0].productdisplayname;
  document.querySelector("p").textContent = data[0].price;
}

// const url = fetch("https://kea-alt-del.dk/t7/api/products/1163")
//   .then((response) => response.json())
//   .then((data) => showProdukt(data));

// function showProdukt(produkt) {
//   console.log(produkt);
//   document.querySelector(".produkt_name h3").textContent = produkt.productdisplayname;
// }
