(function() {
  document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var data = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      confirm: e.target.elements.confirm.value
    }

    function validate(data) {
      // check inputs aren't empty
      for (var key in data) {
        if (!data[key].trim()) {
          indexModule.showMessage('Missing information: ' + key);
          return false;
        }
      }

      // check email contains @
      if (!/@/.test(data.email) || data.email[data.email.length - 1] === '@') {
        indexModule.showMessage('Email address is invalid');
        return false;
      }

      // check both passwords match
      if (data.password !== data.confirm) {
        indexModule.showMessage('Passwords don\'t match');
        return false;
      }

      return true;
    }

    // send data to server if it passes validation
    if (validate(data)) {
      console.log('Form validated, sending to server.');
    }
  });
})();
