import {Request, Response} from "express";
import {Merchant, MerchantType} from "../models";

export const getMerchants = (req: Request, res: Response) => {
  const { query } = req;
  Merchant.find(query, (err: Error, merchants: Array<MerchantType>) => {
    return err ? res.send(err) : res.json(merchants);
  })
};
