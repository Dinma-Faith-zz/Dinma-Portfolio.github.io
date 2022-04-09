function validate(e) {
  
  const email = document.getElementById('mail');
  if (email.value !== email.value.toLowerCase()) {
    const err = document.querySelector('.err');
    err.classList.toggle('show');
    e.preventDefault();
  }
}
const submit = document.getElementById('get-button2');
submit.addEventListener('click', validate);