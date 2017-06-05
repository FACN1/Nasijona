(function() {
  // update char count for name input
  document.getElementById('name-text').addEventListener('input', function(e) {
    var count = e.target.value.length;
    document.getElementById('name-char-count').textContent = 25 - count;
  });

  // update char count for about text area
  document.getElementById('about-text').addEventListener('input', function(e) {
    var count = e.target.value.length;
    document.getElementById('about-char-count').textContent = 200 - count;
  });

  // form submit event handler
  document.getElementById('profile-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var data = {
      shop: e.target.elements.shop.value,
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
