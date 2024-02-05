window.addEventListener("DOMContentLoaded", init);

const produktlisteURL = "https://kea-alt-del.dk/t7/api/products?limit=100";

let produktlisteTemplate;
let produktlisteContainer;

function init() {
  console.log("init");

  produktlisteTemplate = document.querySelector(".produktliste_template");
  console.log("produktlisteTemplate", produktlisteTemplate);

  produktlisteContainer = document.querySelector(".produktliste_container");
  console.log("produktliste_container", produktlisteContainer);

  fetch(produktlisteURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showProduct(json);
    });
}

function showProduct(productJSON) {
  let productClone;

  productJSON.forEach((product) => {
    console.log("Product", product);
    let productClone = produktlisteTemplate.cloneNode(true).content;
    productClone.querySelector(".produktliste_image");
    productClone.querySelector(".produktliste_image").alt = `picture of a ${product.brandname} product`;
    productClone.querySelector(".produktliste_name").textContent = product.productdisplayname;
    productClone.querySelector(".produktliste_tagline").textContent = product.articletype;
    productClone.querySelector(".produktliste_price").textContent = product.price;
    productClone.querySelector(".produktliste_discount").textContent = product.discount;
    produktlisteContainer.appendChild(productClone);
  });
}

// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const valgt_kategori = urlParams.get("category");
// const valgt_subkategori = urlParams.get("subcategory");

// const productURL = "https://kea-alt-del.dk/t7/api/products/1163";
// const subkategoriURL = "https://kea-alt-del.dk/t7/api/subcategories?category=" + valgt_kategori;

// // let imagePath = "https://kea-alt-del.dk/t7/images/webp/640/";
// // // const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${productid}.webp`;

// const productid = 123456;
// const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${productid}.webp`;

// let filter_elementTemplate;
// let filter_container;
// let produkter_container;

// function init() {
//   console.log("init");

//   filter_elementTemplate = document.querySelector(".filter_element");
//   console.log("filter_element", filter_elementTemplate);

//   filter_container = document.querySelector(".filter_container");
//   console.log("filter_container", filter_container);

//   fetch(subkategoriURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (json) {
//       visSubkategori(json);
//     });
// }

// function visSubkategori(subkatJSON) {
//   let subkatClone;

//   subkatJSON.forEach((element) => {
//     console.log("subkat", element);
//     let subkatClone = filter_elementTemplate.cloneNode(true).content;
//     subkatClone.querySelector(".filter_element_text").textContent = element.subcategory;
//     urlParams.set("subcategory", element.subcategory);
//     subkatClone.querySelector(".filter_element_text").href = "produktliste.html?" + urlParams;
//     filter_container.appendChild(subkatClone);
//   });
// }
