(function() {
  // update char count for description input
  document.getElementById('desc-text').addEventListener('input', function(e) {
    var count = e.target.value.length;
    document.getElementById('desc-char-count').textContent = 100 - count;
  });

  // form submit event handler
  document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var data = {
      product: e.target.elements.product.value,
      category: e.target.elements.category.value,
      description: e.target.elements.description.value,
      price: e.target.elements.price.value,
      image: e.target.elements.imageUrl.value
    };

    if (Nasijona.validate('product', data)) {
      Nasijona.makeRequest('/add-product', 'POST', data, function(err, res) {
        if (err) return Nasijona.showMessage(err);
        console.log(res);
      });
    }
  });
})();
