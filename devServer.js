const path = require('path');
const express = require('express');

const app = express();

app.use('/', express.static(__dirname));

app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('View demo at http://localhost:3000/demo');
});
