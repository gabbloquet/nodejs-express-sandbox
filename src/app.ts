import { Request, Response } from "express";
const express = require('express');
import mongoose from "mongoose";

import * as merchantController from './domain/merchant/controllers'

const db = mongoose.connect('mongodb://localhost/proximityApi')

const app = express();
const classicPort = process.env.PORT || 8000;

app.get('/merchants', merchantController.getMerchants);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to my API (powered by Nodemon) !')
})

app.listen(classicPort, (req: Request, res: Response) => {
  console.log('My wonderful app is running on ' + classicPort + ' port.')
})


