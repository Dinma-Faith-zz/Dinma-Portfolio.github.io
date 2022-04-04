// Get element 
let modal = document.getElementById('contentModal');
let openBtn = document.getElementById('barsBtn');
let closeBtn = document.getElementById('closeBtn');
// Function to open Modal
function openModal() {
  modal.style.display = 'block';
}
function closeModal() {
  modal.style.display = 'none';
}
// Listen For
openBtn.addEventListener('click', openModal);
// Listen For
closeBtn.addEventListener('click', closeModal);