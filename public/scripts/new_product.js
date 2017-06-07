(function() {
  // update char count for description input
  document.getElementById('desc-text').addEventListener('input', function(e) {
    var count = e.target.value.length;
    document.getElementById('desc-char-count').textContent = 100 - count;
  });
})();
