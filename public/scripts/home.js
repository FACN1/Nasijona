(function() {
  document.getElementById('login-button').addEventListener('click', function(e) {
    // search for token cookie
    var token = document.cookie.split(';').filter(function(cookie) {
      return cookie.trim().split('=')[0] === 'token';
    });

    // redirect to login, or delete cookie and reload
    if (token.length === 0) {
      location.href = '/login';
    } else {
      document.cookie = 'token=; expires=Thu 01 Jan 1970 00:00:00 UTC;';
      location.href = '/';
    }
  });
})();
