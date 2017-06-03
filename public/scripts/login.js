(function() {
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var data = {
      username: e.target.elements.username.value,
      password: e.target.elements.password.value
    }

    if (Nasijona.validate('login', data)) {
      // check username and password
      Nasijona.makeRequest('/authenticate', 'POST', data, function(err, res) {
        if (err) return Nasijona.showMessage(err);

        // store JWT in localStorage, and redirect to homepage
        localStorage.token = res;
        location.href = '/';
      });
    }
  });
})();
