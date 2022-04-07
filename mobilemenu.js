const modal = document.getElementById('contentModal');
const openBtn = document.getElementById('barsBtn');
const closeBtn = document.getElementById('closeBtn');
const link = document.querySelectorAll('.link');
function openModal() {
  modal.style.display = 'block';
}
function closeModal() {
  modal.style.display = 'none';
}
openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
link.forEach((link) => {
  link.addEventListener('click', closeModal);
});