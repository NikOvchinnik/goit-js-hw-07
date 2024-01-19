function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtnElem = document.querySelector(".change-color");
changeBtnElem.addEventListener("click", onBtnChange);

function onBtnChange(e) {
  const bodyElem = document.querySelector("body");
  const spanElem = document.querySelector(".color");

  spanElem.textContent = getRandomHexColor();
  bodyElem.style.backgroundColor = getRandomHexColor();

}