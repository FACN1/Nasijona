(function() {
  document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var data = {
      username: e.target.elements.username.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      confirmation: e.target.elements.confirm.value
    }

    // send data to server if it passes validation
    if (validate(data)) {
      indexModule.makeRequest('/add-user', 'POST', data, function(err, res) {
        if (err) return indexModule.showMessage(err);
        location.href = '/profile';
      });
    }
  });

  function validate(data) {
    // check inputs aren't empty
    for (var key in data) {
      if (!data[key].trim()) {
        indexModule.showMessage('Missing information: ' + key);
        return false;
      }
    }

    // check username for spaces
    if (/\s/.test(data.username)) {
      indexModule.showMessage('Username can\'t contain spaces');
      return false;
    }

    // check email address
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data.email)) {
      indexModule.showMessage('Email address is invalid');
      return false;
    }

    // check both passwords match
    if (data.password !== data.confirmation) {
      indexModule.showMessage('Passwords don\'t match');
      return false;
    }

    return true;
  }
})();
