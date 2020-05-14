import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();
/**
 * POST route template
 */
router.post(
    '/',
    (req: Request, res: Response, next: express.NextFunction): void => {
        console.log('made it to server Pet POST', req.body);
        const queryString: string = `INSERT INTO "pet" ("pet_name", "pet_color", "pet_breed") VALUES ($1, $2, $3);`;

        pool.query(queryString, [req.body.name, req.body.color, req.body.breed])
        .then ((response:any): void => {
            res.sendStatus(201);
        })
        .catch((err: string): void => {
            console.log( err );
            res.sendStatus(500);
        })        
    }
);

export default router;

