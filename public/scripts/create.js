(function() {
  // update char count for about text area
  document.getElementById('about-text').addEventListener('input', function(e) {
    var count = e.target.value.length;
    document.getElementById('char-count').textContent = 300 - count;
  });

  document.getElementById('profile-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var data = {
      about: e.target.elements.about.value,
      image: e.target.elements.imageUrl.value
    }

    if (Nasijona.validate('profile', data)) {
      Nasijona.makeRequest('/add-profile', 'POST', data, function(err, res) {
        if (err) return Nasijona.showMessage(err);
        location.href = '/profile?u=' + res;
      });
    }
  });
})();
