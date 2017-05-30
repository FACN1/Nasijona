var indexModule = (function() {
  var makeRequest = function(url, method, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(null, xhr.responseText);
      }
    }
    xhr.open(method, url);

    if (method === 'POST' || method === 'PUT') {
      xhr.send(data);
    } else {
      xhr.send();
    }
  }

  return {
    makeRequest: makeRequest
  }
})();
