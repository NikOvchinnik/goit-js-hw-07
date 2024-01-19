function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElem = document.querySelector("input");
const createBtnElem = document.querySelector("button[data-create]");
const destroyBtnElem = document.querySelector("button[data-destroy]");
const boxDivElem = document.querySelector("#boxes");

createBtnElem.addEventListener("click", onBtnCreate);
destroyBtnElem.addEventListener("click", onBtnDestroy);

function onBtnCreate() {
  const inputValue = inputElem.value;
  if (inputValue >= 1 && inputValue <= 100) {
    onBtnDestroy();
    createBoxes(inputValue);
  } else {
    alert("Select a number from 1 to 100");
  }
  inputElem.value = "";
}

function onBtnDestroy() {
  boxDivElem.innerHTML = "";
}

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const boxSize = 30 + ((i-1) * 10);
    boxDivElem.insertAdjacentHTML(
      "beforeend",
      `<div class='box' style='width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()};'></div>`
    );
  }
}
