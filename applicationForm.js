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

const store = localStorage;

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
loadInputFromStore($notesPlus, "notesPlus");
loadInputFromStore($notesMinus, "notesMinus");

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

$notesPlus.addEventListener("input", (e) =>
  saveInputToStore(e.target.value, "notesPlus")
);

$notesMinus.addEventListener("input", (e) =>
  saveInputToStore(e.target.value, "notesMinus")
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
    $dateInput.value == null ||
    $notesPlus.value === "" ||
    $notesPlus.value == null ||
    $notesMinus.value === "" ||
    $notesMinus.value == null
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

  store.setItem("notesPlus", $notesPlus.value);
  store.removeItem("notesPlus");

  store.setItem("notesMinus", $notesMinus.value);
  store.removeItem("notesMinus");

  buy();
});

// BACK TO PREVIOUS PAGE
$backBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log({ e });
  window.location.href = "/";
});

// LIST WITH EXTRAS

function clickHandler() {
  const plusOption = $notesPlus.value;

  const newOption = document.createElement("p");
  newOption.innerText = `+ ${plusOption}`;
  $placeholder.appendChild(newOption);
}

$saveBtn.addEventListener("click", clickHandler);

function clickHandlerMinus() {
  const minusOption = $notesMinus.value;

  const deleteOption = document.createElement("p");
  deleteOption.innerText = `- ${minusOption}`;
  $placeholder.appendChild(deleteOption);
}

$deleteBtn.addEventListener("click", clickHandlerMinus);

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

////zdjęcia

const allButtons = document.querySelectorAll("button");

allButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    const closestDiv = button.closest(".offer", "div");
    const closestImage = closestDiv.querySelector("img");
    const imageAttr = closestImage.getAttribute("src");
    console.log("src: ", imageAttr);
  });
});
