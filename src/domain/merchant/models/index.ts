const mongoose = require('mongoose');

const {Schema} = mongoose;

export type MerchantType = {
  id: Number;
  name: String;
  address: String;
};

const merchantModel = new Schema(
  {
    id: { type: Number, unique: true },
    name: String,
    address: String,
  }
);

export const Merchant = mongoose.model('Merchant', merchantModel);
