(function() {
  // update char count for about text area
  document.getElementById('about-text').addEventListener('input', function(e) {
    var count = e.target.value.length;
    document.getElementById('char-count').textContent = 300 - count;
  });
})();
