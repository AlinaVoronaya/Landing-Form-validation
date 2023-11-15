export function showSuccess() {
  const header = document.getElementById('header');
  header.style.display = 'none';
  const success = document.getElementById('success');
  success.classList.add('success--open');
}

export function closeSuccess() {
  const header = document.getElementById('header');
  header.style.display = '';
  const success = document.getElementById('success');
  success.classList.remove('success--open');
  document.body.style.overflow = '';
}
