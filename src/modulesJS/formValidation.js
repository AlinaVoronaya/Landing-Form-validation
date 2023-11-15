import { formSubmit } from './formSubmit';

function validateText(element) {
  return element.value.trim();
}

function validateEmail(element) {
  const value = element.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value) {
    return 'empty';
  } else if (emailRegex.test(value)) {
    return '';
  } else {
    return 'invalid';
  }
}

export function formValidation(event) {
  event.preventDefault();
  const form = event.target;

  let hasErrors = false;

  Array.from(form.elements).forEach((element) => {
    if (!element.hasAttribute('data-validate')) {
      return;
    }

    let isValid = false;
    const errorElement = element.parentNode.querySelector('.form__error');
    const emailErrorElement = element.parentNode.querySelector('.form__error-email');

    switch (element.type) {
      case 'text':
      case 'textarea':
        isValid = validateText(element);
        if (!isValid) {
          hasErrors = true;
          errorElement.style.visibility = 'visible';
        } else {
          errorElement.style.visibility = 'hidden';
        }
        break;

      case 'email':
        isValid = validateEmail(element);

        if (isValid === 'empty') {
          hasErrors = true;
          errorElement.style.visibility = 'visible';
          emailErrorElement.style.visibility = 'hidden';
        } else if (isValid === '') {
          errorElement.style.visibility = 'hidden';
          emailErrorElement.style.visibility = 'hidden';
        } else if (isValid === 'invalid') {
          hasErrors = true;
          errorElement.style.visibility = 'hidden';
          emailErrorElement.style.visibility = 'visible';
        }
        break;

      default:
        isValid = true;
        break;
    }
  });

  if (!hasErrors) {
    formSubmit(form);
  }
}