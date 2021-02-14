import {Application, Request, Response} from "express";
import bodyParser from "body-parser";

module.exports = (app: Application) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to my API (powered by Nodemon) !')
  })
}
