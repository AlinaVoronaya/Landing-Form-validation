import { formSubmit } from './formSubmit';

export function formValidation(event) {
  event.preventDefault();
  const form = event.target;

  let hasErrors = false;

  Array.from(form.elements).forEach((element) => {
    if (!element.hasAttribute('validate')) {
      return;
    }

    if (element.type === 'text' || element.type === 'email' || element.tagName === 'TEXTAREA') {
      if (!element.value) {
        hasErrors = true;
        element.parentNode.querySelector('.form__error').style.visibility = 'visible';
      } else {
        element.parentNode.querySelector('.form__error').style.visibility = 'hidden';
      }
    }
  });

  if (!hasErrors) {
    formSubmit(form)
  }
}