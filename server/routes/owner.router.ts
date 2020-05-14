import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

/**
 * GET route template
 */
router.get(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const queryString: string = `SELECT "id", "username" from "user";`;

    pool
      .query(queryString)
      .then((response: any): void => {
        res.send(response.rows);
      })
      .catch((err: string): void => {
        console.log(err);
        res.sendStatus(500);
      });
  }
);

/**
 * POST route template
 */
router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
   console.log(req.body)
    const username:string = req.body.username;
  const password:string = req.body.password;
  
   const queryText:string = 'INSERT INTO "user" ("username", "password") VALUES ($1, $2);';
  pool.query(queryText, [username, password])
  .then((response: any): void => {
    res.sendStatus(201);
  })
  .catch((err: string): void => {
    console.log(err);
    res.sendStatus(500);
  });
  }
)



export default router;
