import mongoose from "mongoose";

module.exports = () => {
  mongoose.connect('mongodb://localhost/proximityApi', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } ).then(
    () => { console.log('Database is ready !') },
  ).catch(err => {
    console.error(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
  });
}
