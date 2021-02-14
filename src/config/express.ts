import {Application, Request, Response} from "express";
import bodyParser from "body-parser";
import {MerchantType} from "../domain/merchant/models";

declare global {
  namespace Express {
    interface Request {
      merchant?: MerchantType
    }
  }
}

module.exports = (app: Application) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to my API (powered by Nodemon) !')
  })
}
