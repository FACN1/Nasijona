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
    if (Nasijona.validate('register', data)) {
      Nasijona.makeRequest('/add-user', 'POST', data, function(err, res) {
        if (err) return Nasijona.showMessage(err);

        var result = JSON.parse(res);
        Nasijona.signIn(result.token);
        location.href = '/profile?u=' + result.user;
      });
    }
  });
})();
