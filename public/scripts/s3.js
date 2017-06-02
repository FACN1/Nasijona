(function() {
  // listen for image upload to browser
  var imageLabel = document.getElementById('image-label');
  var imageInput = document.getElementById('image-input');

  imageInput.addEventListener('change', function() {
    imageLabel.childNodes[0].nodeValue = 'Uploading...';
    var file = imageInput.files[0];
    getSignedRequest(file);
  });

  // retrieve signed request from back end
  function getSignedRequest(file) {
    // create unique filename for s3
    var fileName = new Date().getTime().toString().concat('_').concat(file.name);
    var url = '/sign-s3?fname=' + fileName + '&ftype=' + file.type;

    // make request to server route /sign-s3
    indexModule.makeRequest(url, 'GET', null, function(err, response) {
      if (err) return console.log(err);

      // if successful, upload the file
      var parsedRes = JSON.parse(response);
      uploadFile(file, parsedRes.signedRequest, parsedRes.url);
    });
  };

  // upload the file to s3
  function uploadFile(file, signedRequest, dataUrl) {
    indexModule.makeRequest(signedRequest, 'PUT', file, function(err, response) {
      if (err) return console.log(err);

      // adjust form view
      document.getElementById('preview-image').style.backgroundImage = 'url(' + dataUrl + ')';
      document.getElementById('preview-image').classList.remove('fa', 'fa-file-image-o');
      document.getElementById('image-url').value = dataUrl;
      imageLabel.childNodes[0].nodeValue = file.name;
    });
  };
})();
