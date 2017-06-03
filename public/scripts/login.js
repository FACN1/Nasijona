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

        // store JWT as cookie, and redirect to homepage
        var expiry = new Date().getTime() + 1000 * 60 * 60 * 24 * 30; // 1 month expiry
        document.cookie = 'token=' + res + '; expires=' + new Date(expiry).toString();
        location.href = '/';
      });
    }
  });
})();
