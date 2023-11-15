export function showSuccess() {
  let header = document.getElementById('header');
  header.style.display = 'none';
  let success = document.getElementById('success');
  success.classList.add('success--open');
}

export function closeSuccess() {
  let header = document.getElementById('header');
  header.style.display = '';
  let success = document.getElementById('success');
  success.classList.remove('success--open');
  document.body.style.overflow = '';
}
