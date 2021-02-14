import {Request, Response} from "express";
import {Merchant, MerchantType} from "../models";

/**
 * Get all merchants.
 * @route GET /merchants
 */
export const getMerchants = (req: Request, res: Response) => {
  const { query } = req;
  Merchant.find(query, (err: Error, merchants: Array<MerchantType>) => {
    return err ? res.send(err) : res.json(merchants);
  })
};

/**
 * Get a specific merchant with ID.
 * @route GET /merchants/:id
 */
export const getMerchantById = (req: Request, res: Response) => {
  const { params } = req;
  Merchant.findById(params.id, (err: Error, merchant: MerchantType) => {
    return err ? res.send(err) : res.json(merchant);
  })
};

/**
 * Create a merchant.
 * @route POST /merchants
 */
export const createMerchant = (req: Request, res: Response) => {
  const merchant = new Merchant(req.body);
  merchant.save();
  return res.status(201).json(merchant)
};
