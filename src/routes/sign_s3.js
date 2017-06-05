const Aws = require('aws-sdk');

module.exports = (req, res) => {
  // set up new s3 with parameters
  const s3 = new Aws.S3({
    signatureVersion: 'v4',
    region: 'eu-west-2'
  });
  const fileName = req.query.fname;
  const fileType = req.query.ftype;

  const s3Params = {
    Bucket: process.env.S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  // get signed url from s3 and return it to the front end
  s3.getSignedUrl('putObject', s3Params, (err, signedUrl) => {
    if (err) return res.send(err);

    const returnData = {
      signedRequest: signedUrl,
      url: `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };

    return res.send(JSON.stringify(returnData));
  });
};
