function validate(e) {
  e.preventDefault();
  const email = document.getElementById('mail');
  if (email.value !== email.value.toLowerCase()) {
    const err = document.querySelector('.err');
    err.classList.toggle('show');
  } else if (email.value === email.value.toLowerCase()) {
    const suc = document.querySelector('.suc');
    suc.classList.toggle('visible');
  }
}
const submit = document.getElementById('get-button2');
submit.addEventListener('click', validate);