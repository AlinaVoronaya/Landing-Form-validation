require("./styles/styles.scss");
import { Modal } from "./modulesJS/modalFunctions";
import { closeSuccess } from "./modulesJS/cuccessFunctions";
import { formValidation } from "./modulesJS/formValidation";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
}


const myModal = new Modal('modal');

const button = document.getElementById("modal-btn");
if (button) {
  button.addEventListener("click", myModal.open.bind(myModal));
}

const closeButton = document.getElementById("modal-close");
if (closeButton) {
  closeButton.addEventListener("click", function(event) {
    event.preventDefault();
    myModal.close.bind(myModal);
  });
}

const closeOverlay = document.getElementById("overlay");
if (closeOverlay) {
  closeOverlay.addEventListener("click", myModal.close.bind(myModal));
}

const form = document.getElementById("form");
if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    formValidation(event);
  });
}

const closeSuccessWindow = document.getElementById("successOverlay");
if (closeSuccessWindow) {
  closeSuccessWindow.addEventListener("click", closeSuccess);
}