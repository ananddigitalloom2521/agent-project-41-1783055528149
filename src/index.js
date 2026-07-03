const express = require('express');
const routes = require('./routes/index');
const app = express();
app.use(express.static('public'));
app.use('/', routes);
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});