var indexModule = (function() {
  var makeRequest = function(url, method, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(null, xhr.responseText);
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
        callback(xhr.responseText, null);
      }
    }
    xhr.open(method, url);

    if (method === 'POST') {
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));
    } else if (method === 'PUT') {
      xhr.send(data);
    } else {
      xhr.send();
    }
  }

  var showMessage = function(msg) {
    var msgBox = document.getElementById('msg-box');
    msgBox.innerHTML = msg;
    msgBox.classList.add('show-msg');

    setTimeout(function() {
      msgBox.innerHTML = '';
      msgBox.classList.remove('show-msg');
    }, 1500);
  }

  return {
    makeRequest: makeRequest,
    showMessage: showMessage
  }
})();
