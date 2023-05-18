const store = localStorage;

//SAVE IMAGE TO STORAGE
const allButtons = document.querySelectorAll("button");

const saveInputToStore = (input, storeName) => {
  store.setItem(storeName, input);
};

const loadInputFromStore = (input, storeName) => {
  const val = store.getItem(storeName);

  input.value = val;
};
console.log(allButtons);
allButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    const closestDiv = button.closest(".offer");
    console.log(closestDiv);
    const closestImage = closestDiv.querySelector("img");
    const imageAttr = closestImage.getAttribute("src");

    const closestPrice = closestDiv.querySelector(".price");
    const priceAttr = closestPrice.innerText;
    console.log(priceAttr, closestPrice);
    store.setItem("price", priceAttr);

    store.setItem("image", imageAttr);
    console.log("src: ", imageAttr);
    window.location.href = "applicationForm.html";
  });
});
