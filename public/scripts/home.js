(function() {
  document.getElementById('login-button').addEventListener('click', function(e) {
    // redirect to login, or delete cookie and reload
    if (e.target.innerHTML === 'LOG IN') {
      location.href = '/login';
    } else {
      document.cookie = 'token=; expires=Thu 01 Jan 1970 00:00:00 UTC;';
      location.href = '/';
    }
  });
})();
