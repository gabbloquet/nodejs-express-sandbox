const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Welcome to my API !')
})

app.listen(port, (req, res) => {
  console.log('My wonderful app is running on ' + port + ' port.')
})


