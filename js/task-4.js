const loginFormElem = document.querySelector(".login-form");

loginFormElem.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const userEmail = loginFormElem.elements.email.value.trim();
  const userPassword = loginFormElem.elements.password.value.trim();

  if (userEmail !== "" && userPassword !== "") {
    const objUser = {
      email: userEmail,
      password: userPassword,
    };
    console.log(objUser);

    loginFormElem.reset();
  } else {
    alert("All form fields must be filled in");
  }
}
