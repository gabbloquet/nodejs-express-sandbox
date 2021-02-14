const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost/proximityApi')
const merchantRouter = express.Router();
const classicPort = process.env.PORT || 8000;

// const Merchant = require('./domain/models/merchantModel')

merchantRouter.route('/')
  .get((req, res) => {
    const response = [
      {id: 1, name: 'La Prairie'},
      {id: 2, name: "Prise Direct'"}
    ]

    res.json(response);
  })

app.use('/merchants', merchantRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my API (powered by Nodemon) !')
})

app.listen(classicPort, (req, res) => {
  console.log('My wonderful app is running on ' + classicPort + ' port.')
})


