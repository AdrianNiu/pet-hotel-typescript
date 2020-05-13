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
    const queryString: string = `INSERT INTO "sample" ("cats") VALUES ($1)`;

    pool
      .query(queryString, ['Gizmo'])
      .then((response: any): void => {
        res.send(response);
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
