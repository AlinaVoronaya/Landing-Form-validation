require("./styles/styles.scss");
import { openModal, closeModal } from "./modules/modalFunctions";
import { closeSuccess } from "./modules/cuccessFunctions";
import { formValidation } from "./modules/formValidation";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
}

const button = document.getElementById("modal-btn");
if (button) {
  button.onclick = openModal;
}

const closeButton = document.getElementById("modal-close");
if (closeButton) {
  closeButton.onclick = function(event) {
    event.preventDefault();
    closeModal();
  };
}

const closeOverlay = document.getElementById("overlay");
if (closeOverlay) {
  closeOverlay.onclick = closeModal;
}

const form = document.getElementById("form");
if (form) {
  form.onsubmit = formValidation;
}

const closeSuccessWindow = document.getElementById("successOverlay");
if (closeSuccessWindow) {
  closeSuccessWindow.onclick = closeSuccess;
}