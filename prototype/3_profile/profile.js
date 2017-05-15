// set these fields from localStorage
document.getElementById('title').value = localStorage.sellerName;

// event listeners
var editButtons = Array.from(document.getElementsByClassName('edit-button'));
editButtons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    var targetInput = document.getElementById(e.target.dataset.key);
    targetInput.disabled = false;
    targetInput.focus();
    targetInput.classList.add('editable')
  });
});
