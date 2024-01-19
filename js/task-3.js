const inputElem = document.querySelector("#name-input");
inputElem.addEventListener("input", onInputChange);
 
function onInputChange() {
    const nameUserElem = document.querySelector("#name-output");
    if (inputElem.value.trim() !== "") {
      nameUserElem.textContent = inputElem.value.trim();
    } else {
        nameUserElem.textContent = "Anonymous";
    }
}