/*
 Create a function that turns the form border-bottom colour to red if the user's 
 input is not valid on submission attempt.

 On the submission of the form, the function will need to check all the input values of
 the form to find any inputs that are invalid. 

 For any inputs that return invalid, it should display an error message underneath the 
 input field and the red exclamation mark icon within the input field.

 Inputs: 
 - submission button click event.
 - submitted values of all input elements.

 Output:
 - If value of any input field is invalid upon submission, 
it should display the error message of that input's parent
container. 
 */

/* 

I want to create a function that watches for inputs in each field. For the name field, I need to watch
each character input in the form to watch for the moment the validation requirement is met. 
As soon as the validation criteria is met, the border bottom color should change to neon.

- Listen out for keybord inputs on the name input element.
- On each event trigger, check if the value of the input matches the validation criteria. 
- Once criteria is met, change border bottom color to neon. 
- If criteria is not met, no change should occur. 
*/

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
  } else {
    nameInput.style.borderBottomColor = "var(--white)";
  }
});

emailInput.addEventListener("input", (e) => {
  const emailValue = emailInput.value;
  if (emailValue.match(re)) {
    emailInput.style.borderBottomColor = "var(--neon)";
  } else {
    emailInput.style.borderBottomColor = "var(--white)";
  }
});

messageInput.addEventListener("input", (e) => {
  const messageValue = messageInput.value;

  if (messageValue.length >= 10) {
    messageInput.style.borderBottomColor = "var(--neon)";
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
  } else if (!emailValue.match(re)) {
    const errorElements = [...emailInputContainer.querySelectorAll(".error")];
    errorElements.forEach((element) => (element.style.visibility = "visible"));
  } else if (messageValue.length < 10) {
    const errorElements = [...messageInputContainer.querySelectorAll(".error")];
    errorElements.forEach((element) => (element.style.visibility = "visible"));
  } else {
    errorElement = [...form.querySelectorAll(".error")]
    errorElement.forEach((element) => element.style.visibility = "hidden")
  }
}
