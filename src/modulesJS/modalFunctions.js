export class Modal {
    constructor(elementId) {
        this.header = document.getElementById('header');
        this.modal = document.getElementById(elementId);
    }

    open() {
        this.header.style.display = 'none';
        this.modal.classList.add('modal--open');
        document.body.style.overflow = 'hidden';
        document.body.style.width = '100%';
    }

    close() {
        this.header.style.display = '';
        this.modal.classList.remove('modal--open');
        document.body.style.overflow = '';
        document.body.style.width = '100%';
        const form = document.getElementById('form');
        resetForm(form);
    }
}

export function resetForm(form) {
    for (const element of form.elements) {
        if (!element.hasAttribute('data-validate')) {
            continue;
        }
        element.value = '';
        element.parentNode.querySelector('.form__error').style.visibility = 'hidden';
    }
}