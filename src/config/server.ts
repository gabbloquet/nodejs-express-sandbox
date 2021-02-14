import {Application} from "express";

const classicPort = process.env.PORT || 8000;

module.exports = (app: Application) => {

  app.listen(classicPort, () => {
    console.log('My wonderful app is running on ' + classicPort + ' port.')
  })
}
