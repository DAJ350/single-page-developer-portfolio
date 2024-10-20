const form = document.getElementById("form");
const submitButton = document.getElementById("submit");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameInputContainer = form.querySelector(
  ".contact-section__form-input-container--name"
);
const emailInputContainer = form.querySelector(
  ".contact-section__form-input-container--email"
);
const messageInputContainer = form.querySelector(
  ".contact-section__form-input-container--message"
);

const re = /^\S+@\S+\.\S+$/;

nameInput.addEventListener("input", (e) => {
  const value = e.target.value;
  //console.log(value);
  if (value.length >= 3) {
    nameInput.style.borderBottomColor = "var(--neon)";
    const errorElements = [...nameInputContainer.querySelectorAll(".error")];
    console.log(errorElements);
    errorElements.forEach((element) => (element.style.visibility = "hidden"));
  } else {
    nameInput.style.borderBottomColor = "var(--white)";
  }
});

emailInput.addEventListener("input", (e) => {
  const emailValue = emailInput.value;
  if (emailValue.match(re)) {
    emailInput.style.borderBottomColor = "var(--neon)";
    const errorElements = [...emailInputContainer.querySelectorAll(".error")];
    console.log(errorElements);
    errorElements.forEach((element) => (element.style.visibility = "hidden"));
  } else {
    emailInput.style.borderBottomColor = "var(--white)";
  }
});

messageInput.addEventListener("input", (e) => {
  const messageValue = messageInput.value;

  if (messageValue.length >= 10) {
    messageInput.style.borderBottomColor = "var(--neon)";
    const errorElements = [...messageInputContainer.querySelectorAll(".error")];
    console.log(errorElements);
    errorElements.forEach((element) => (element.style.visibility = "hidden"));
  } else {
    messageInput.style.borderBottomColor = "var(--white)";
  }
});

form.addEventListener("submit", checkValidity);

function checkValidity(e) {
  e.preventDefault();

  const emailValue = emailInput.value;
  const messageValue = messageInput.value;
  const nameValue = nameInput.value;

  if (nameValue < 3) {
    const errorElements = [...nameInputContainer.querySelectorAll(".error")];
    errorElements.forEach((element) => (element.style.visibility = "visible"));
    nameInput.style.borderBottomColor = "var(--error-color)";
  } else if (!emailValue.match(re)) {
    const errorElements = [...emailInputContainer.querySelectorAll(".error")];
    errorElements.forEach((element) => (element.style.visibility = "visible"));
    emailInput.style.borderBottomColor = "var(--error-color)";
  } else if (messageValue.length < 10) {
    const errorElements = [...messageInputContainer.querySelectorAll(".error")];
    errorElements.forEach((element) => (element.style.visibility = "visible"));
    messageInput.style.borderBottomColor = "var(--error-color)";
  } else {
    errorElement = [...form.querySelectorAll(".error")];
    errorElement.forEach((element) => (element.style.visibility = "hidden"));
  }
}
