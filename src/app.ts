require('dotenv').config();
import mongoose from "mongoose";
import bodyParser from "body-parser";
const express = require('express');

const db = mongoose.connect(`${process.env.DB}`, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

const app = express();
const classicPort = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define controllers / routes
require('./domain/merchant/controllers')(app);

// Define an answer on /
require('./config/server')(app);

app.listen(classicPort, () => {
  console.log('My wonderful app is running on ' + classicPort + ' port.')
})


