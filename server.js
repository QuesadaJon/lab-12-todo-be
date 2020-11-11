const app = require('./lib/app.js');
const port = process.env.PORT || 3000;
require('./lib/client').connect();

console.log(port);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
