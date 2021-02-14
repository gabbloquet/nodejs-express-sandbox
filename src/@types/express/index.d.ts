import {MerchantType} from "../domain/merchant/models";

declare namespace Express {
  export interface Request {
    merchant?: MerchantType
  }
}
