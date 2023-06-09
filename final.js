const store = localStorage;
const $nameField = document.getElementById("name");
const $emailField = document.getElementById("email");
const $dateFiled = document.getElementById("date");
const $imageField = document.getElementById("image");
const $offerPrice = document.getElementById("offerPrice");
const $finalPrice = document.getElementById("finalPrice");

const storeName = store.getItem("name");
const storeEmail = store.getItem("email");
const storeDate = store.getItem("date");
const storeImage = store.getItem("image");
const storePrice = store.getItem("price");
const storePriceFinal = store.getItem("priceFinal");

$nameField.innerText = storeName;
$emailField.innerText = storeEmail;
$dateFiled.innerHTML = storeDate;
$imageField.setAttribute("src", storeImage);
$offerPrice.innerText = storePrice;
$finalPrice.innerText = storePriceFinal;

const $backButtonFinal = document.getElementById("mainPageBtn");
const backFinal = () => {
  window.location.href = "index.html";
};

$backButtonFinal.addEventListener("click", () => {
  backFinal();
});
