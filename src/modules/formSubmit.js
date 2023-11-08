import { showSuccess } from "./cuccessFunctions";
import { closeModal } from "./modalFunctions";

export function formSubmit(form) {
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (response.ok) {
        closeModal();
        showSuccess();
      }
    })
    .catch(error => {
      console.error('Ошибка при отправке формы:', error);
    });
}