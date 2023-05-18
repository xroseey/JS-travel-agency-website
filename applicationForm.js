const $name = document.getElementById("name");
const $email = document.getElementById("email");
const $card = document.getElementById("card");
const $blik = document.getElementById("blik");
const $form = document.getElementById("form");
const $errorElement = document.getElementById("error");
const $dateInput = document.getElementById("date");
const $placeholder = document.getElementById("form-placeholder");
const $notesPlus = document.getElementById("notesPlus");
const $notesMinus = document.getElementById("notesMinus");
const $saveBtn = document.getElementById("saveBtn");
const $deleteBtn = document.getElementById("deleteBtn");
const $offerPrice = document.getElementById("offerPrice");

const store = localStorage;

//Price

const storePrice = store.getItem("price");
$offerPrice.innerText = storePrice;

const checkboxesWrap = document.getElementById("price-checkboxes");
console.log("check", checkboxesWrap);

const checkboxes = checkboxesWrap.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(function (button, index) {
  button.addEventListener("change", function () {
    const checkedArray = [];
    checkboxes.forEach((el) => {
      if (el.checked) {
        return checkedArray.push(true);
      }
    });

    const checkedElements = checkedArray.length;
    console.log("test", checkedArray, checkedElements);

    const price = store.getItem("price");

    const finalPrice = +price + +checkedElements * 1000;
    store.setItem("checkedItems", checkedElements);

    $offerPrice.innerText = finalPrice;

    store.setItem("priceFinal", finalPrice);
  });
});

console.log("cacasdad", checkboxes);

// button click
const $backBtn = document.getElementById("comeBack");
const $sendBtn = document.getElementById("send");

console.log({ store });

const back = () => {
  window.location.href = "index.html";
};

const buy = () => {
  window.location.href = "final.html";
};

// INPUT SAVE & LOAD ON CHANGE
const saveInputToStore = (input, storeName) => {
  store.setItem(storeName, input);
};

const loadInputFromStore = (input, storeName) => {
  const val = store.getItem(storeName);

  input.value = val;
};

// LOAD DATA FROM STORE TO INPUT
loadInputFromStore($name, "formName");
loadInputFromStore($email, "formEmail");
loadInputFromStore($dateInput, "formDate");

// INPUT EVENT LISTENERS
$name.addEventListener("input", (e) =>
  saveInputToStore(e.target.value, "formName")
);

$email.addEventListener("input", (e) =>
  saveInputToStore(e.target.value, "formEmail")
);

$dateInput.addEventListener("input", (e) =>
  saveInputToStore(e.target.value, "formDate")
);

// walidacja danych ///

// FORM SUBMIT
$form.addEventListener("submit", (e) => {
  e.preventDefault();

  $errorElement.innerHTML = "";
  const messages = [];

  const hasNameTwoStrings = $name.value.split(" ");

  if (
    $name.value === "" ||
    $name.value == null ||
    hasNameTwoStrings.length < 2 ||
    $email.value === "" ||
    $email.value == null ||
    $dateInput.value === "" ||
    $dateInput.value == null
  ) {
    messages.push("Uzupełnij dane poprawnie!");
  }

  if (!$card.checked && !$blik.checked) {
    messages.push("wybierz rodzaj płatności!");
  }

  if (messages.length > 0) {
    $errorElement.innerHTML = messages.map((error) => `<p>${error}</p>`);

    return;
  }

  store.setItem("name", $name.value);
  store.removeItem("formName");

  store.setItem("email", $email.value);
  store.removeItem("formEmail");

  store.setItem("date", $dateInput.value);
  store.removeItem("formDate");

  buy();
});

// BACK TO PREVIOUS PAGE
$backBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log({ e });
  window.location.href = "/";
});

////////data 14 dni

const today = new Date();
// console.log(today.toISOString());
const todayDateString = today.toISOString().split("T")[0];

const daysToAdd = 14;
const futureDateString = new Date(today.setDate(today.getDate() + daysToAdd))
  .toISOString()
  .split("T")[0];

$dateInput.setAttribute("min", todayDateString);
$dateInput.setAttribute("max", futureDateString);
