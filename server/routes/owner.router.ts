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
    const queryString: string = `SELECT "user"."id", "username", COUNT("user"."id") AS "number_of_pets" from "user" JOIN "pet" ON "user"."id" = "pet"."user_id"
    GROUP BY "user"."id"
    ;
    `;

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
    res.sendStatus(201);
  }
);

export default router;
