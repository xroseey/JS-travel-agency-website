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

allButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    const closestDiv = button.closest(".offer");
    const closestImage = closestDiv.querySelector("img");
    const imageAttr = closestImage.getAttribute("src");

    const closestPrice = closestDiv.querySelector("h2");
    const priceAttr = closestPrice.getAttribute("price");
    store.setItem("price", priceAttr);

    store.setItem("image", imageAttr);
    console.log("src: ", imageAttr);
    window.location.href = "applicationForm.html";
  });
});

/// LOAD PRICE STORAGE

// const closestPrice = closestDiv.querySelector("offerPrice");
// const priceAttr = closestPrice.getAttribute("h2")
// store.setItem("offerPrice", closestPrice);
