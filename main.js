// Get element 
var modal = document.getElementById('contentModal');
var openBtn = document.getElementById('barsBtn');
var closeBtn = document.getElementById('closeBtn');

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