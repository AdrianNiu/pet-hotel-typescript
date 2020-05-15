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
    const queryString: string = `SELECT "user"."id", "username", COUNT("pet"."id") AS "number_of_pets" from "user" LEFT JOIN "pet" ON "user"."id" = "pet"."user_id"
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


/**
 * DELETE route
 */
router.delete(
  '/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    console.log('In delete request?',req.params)
    const id: string = req.params.id;
    const queryText: string = `DELETE FROM "user" WHERE "id" = $1;`;
    pool.query(queryText, [id])
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
