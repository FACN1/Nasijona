const app = require('./server.js');
require('./db_queries.js'); // opens connection to DB

app.listen(3000, () => {
  console.log('Server running at 3000');
});
