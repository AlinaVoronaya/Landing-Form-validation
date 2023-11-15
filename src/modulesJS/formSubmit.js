import { showSuccess } from "./cuccessFunctions";
import { Modal } from "./modalFunctions";
import { resetForm } from "./modalFunctions";

const myModal = new Modal('modal');

export function formSubmit(form) {
  const formData = new FormData(form);

  const submitButton = form.querySelector('.form__btn');

  submitButton.disabled = true;

  fetch(form.action, {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (response.ok) {
        myModal.close();
        showSuccess();
        resetForm(form);
      }
    })
    .catch(error => {
      console.error('Ошибка при отправке формы:', error);
    })
    .finally(() => {
      submitButton.disabled = false;
    });
}