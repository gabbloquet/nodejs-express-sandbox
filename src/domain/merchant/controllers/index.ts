import {Application, NextFunction, Request, Response} from "express";
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
export const getMerchantById = (req: Request, res: Response) => res.json(req.merchant);

/**
 * Create a merchant.
 * @route POST /merchants
 */
export const createMerchant = (req: Request, res: Response) => {
  const merchant = new Merchant(req.body);
  merchant.save();
  return res.status(201).json(merchant)
};

/**
 * Get a specific merchant with ID.
 * @route PUT /merchants/:id
 */
export const updateMerchant = (req: Request, res: Response) => {
  const { params } = req;
  Merchant.findById(params.id, (err: Error, merchant: MerchantType) => {
    return err ? res.send(err) : res.json(merchant);
  })
};

/**
 * Middleware which return merchant when a request for a specific ID is called.
 * @route ALL /merchants/:id
 */
export const merchantIdMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  Merchant.findById(params.id, (err: Error, merchant: MerchantType) => {
    if(err) {
      res.send(err)
    }
    if(merchant) {
      // @ts-ignore
      req.merchant = merchant;
      return next();
    }
    return res.sendStatus(404);
  })
};

module.exports = (app: Application) => {
  app.get('/merchants', getMerchants);
  app.get('/merchants/:id', getMerchantById);
  app.post('/merchants', createMerchant);
  app.put('/merchants/:id', updateMerchant);
  app.use('/merchants/:id', merchantIdMiddleware);
}
