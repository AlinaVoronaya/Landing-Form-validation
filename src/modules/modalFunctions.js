export function openModal(event) {
    event.preventDefault();
    let header = document.getElementById('header');
    header.style.display = 'none';
    let modal = document.getElementById('modal');
    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';
}

export function closeModal() {
    let header = document.getElementById('header');
    header.style.display = '';
    let modal = document.getElementById('modal');
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
    document.body.style.width = '100%';
    const form = document.getElementById('form');
    resetForm(form);
}

function resetForm(form) {
    for (const element of form.elements) {
        if (!element.hasAttribute('validate')) {
            continue;
        }
        element.value = '';
        element.parentNode.querySelector('.form__error').style.visibility = 'hidden';
    }
}