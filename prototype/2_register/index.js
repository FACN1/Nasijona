// save name and email to local storage on form submit
document.getElementById('submit').addEventListener('click', function(e) {
  var formInputs = document.getElementById('form').elements;
  localStorage.sellerName = formInputs.name.value;
  localStorage.sellerEmail = formInputs.email.value;
});
