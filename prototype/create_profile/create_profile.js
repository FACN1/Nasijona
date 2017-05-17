// update image label when user uploads an image
document.getElementById('image-input').addEventListener('change', function() {
  var fileName = document.getElementById('image-input').value.slice(12);
  document.getElementById('image-label').textContent = fileName;
});

// save form info to local storage on form submit
document.getElementById('submit').addEventListener('click', function() {
  var formInputs = document.getElementById('form').elements;
  localStorage.shopName = formInputs.title.value;
  localStorage.shopAbout = formInputs.about.value;
});
