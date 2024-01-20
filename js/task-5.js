function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.querySelector("body");
const changeBtnElem = document.querySelector(".change-color");
const spanElem = document.querySelector(".color");

changeBtnElem.addEventListener("click", onBtnChange);

function onBtnChange(e) {
  const randomColor = getRandomHexColor();
  spanElem.textContent = randomColor;
  bodyElem.style.backgroundColor = randomColor;
}
