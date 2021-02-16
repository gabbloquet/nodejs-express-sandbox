import {Merchant, MerchantType} from "../models";

export const createMerchant = (merchant: MerchantType) => {
  const merchantToCreate = new Merchant(merchant);
  merchantToCreate.save();
  return merchantToCreate;
}
