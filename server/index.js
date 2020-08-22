const express = require('express');
const path = require('path');
const model = require('../db/model.js');
console.log('model hit!');

const app = express();
const PORT = 3004;
app.use('/rooms/:room_id', express.static(path.join(__dirname, '../public')));

app.get('/suggestedListings', (req, res) => {
  console.log('get req working!');
  model.getListings((error, listings) => {
    if (error) {
      console.log('server down');
      res.status(400).send(error);
    } else {
      console.log('GET received!');
      res.status(200).send(listings);
    }
  });
});

app.listen(PORT, (error) => {
  if (error) {
    console.log('Failed Server Connection');
  } else {
    console.log(`Server listening on PORT: ${PORT}`);
  }
});
