const app = require('./server.js');
require('env2')('./config.env');

app.listen(3000, () => {
  console.log('Server running at 3000');
});
