import {Application, NextFunction, Request, Response} from "express";
import {Merchant, MerchantType} from "../models";

const express = require('express');
const merchantRouter = express.Router();

/**
 * Middleware which return merchant when a request for a specific ID is called.
 * @route ALL /merchants/:id
 */
merchantRouter.use('/merchants/:id', (req: Request, res: Response, next: NextFunction) => {
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
});

/**
 * All merchants
 * @route GET /merchants
 * @route POST /merchants (creation)
 */
merchantRouter.route('/merchants')
  .get((req: Request, res: Response) => {
    const { query } = req;
    Merchant.find(query, (err: Error, merchants: Array<MerchantType>) => {
      return err ? res.send(err) : res.json(merchants);
    })
  })
  .post((req: Request, res: Response) => {
    const merchant = new Merchant(req.body);
    merchant.save();
    return res.status(201).json(merchant)
  });

/**
 * Get a specific merchant with ID or update it.
 * @route GET /merchants/:id
 * @route PUT /merchants/:id
 * @route PATCH /merchants/:id
 */
merchantRouter.route('/merchants/:id')
  .get((req: Request, res: Response) => res.json(req.merchant))
  .put((req: Request, res: Response) => {
    const {merchant} = req;
    if(merchant && req.body){
      merchant.id = req.body.id;
      merchant.name = req.body.name;
      merchant.address = req.body.address;
    }
    req.merchant.save((err: Error) => {
      return err ? res.send(err) : res.json(merchant)
    });
  })
  .patch((req: Request, res: Response) => {
    const {merchant} = req;
    if(req.body._id) {
      delete req.body._id;
    }
    Object.entries(req.body).forEach((item) => {
      const key = item[0];
      merchant[key] = item[1];
    })
    req.merchant.save((err: Error) => {
      return err ? res.send(err) : res.json(merchant)
    });
  })
  .delete((req: Request, res: Response) => {
    req.merchant.delete((error: Error) => {
      return error ? res.send(error) : res.sendStatus(204);
    })
  })

module.exports = (app: Application) => {
  app.use('/', merchantRouter);
}
