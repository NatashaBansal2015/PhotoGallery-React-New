const database = require('./data/database');

const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());
const photos = require('./data/photos.json');

app.get('/photos', (req, res) => {
  database.query('Select * from photos',function(error,photos){
    res.json(photos);
  })
  //res.send(photos);
});

app.listen(3000, () => {})