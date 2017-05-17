// save to local storage on form submit
document.getElementById('submit').addEventListener('click', function() {
  var formInputs = document.getElementById('product-form').elements;
  localStorage.productTitle = formInputs.title.value;
  localStorage.productDescription = formInputs.description.value;
  localStorage.productCategory = formInputs.category.value;
  localStorage.productPrice = formInputs.price.value;
  localStorage.productImage = formInputs.image.value.slice(12);
});

// update image label when user uploads an image
document.getElementById('image-input').addEventListener('change', function() {
  var fileName = document.getElementById('image-input').value.slice(12);
  if (fileName) {
    document.getElementById('image-label').textContent = fileName;
  } else {
    document.getElementById('image-label').textContent = 'Upload Image';
  }
});
