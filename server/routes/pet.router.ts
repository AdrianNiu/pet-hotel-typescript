import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

//GET Router
router.get(
    '/',
    (req: Request, res: Response, next: express.NextFunction): void => {
        const queryString: string = 
        `SELECT "pet"."id", "pet_name", "username", 
        "pet_color", "pet_breed", "check_in", "image_url" FROM "pet" 
        JOIN "user" ON "user"."id" = "pet"."user_id"
        ORDER BY "username", "pet_name";`;
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
 * POST route
 */


router.post(
    '/',
    (req: Request, res: Response, next: express.NextFunction): void => {
        console.log('made it to server Pet POST', req.body);
        const queryString: string = `INSERT INTO "pet" ("pet_name", "pet_color", "pet_breed", "user_id", "image_url", "check_in" ) VALUES ($1, $2, $3, $4, $5, FALSE);`;

        pool.query(queryString, [req.body.name, req.body.color, req.body.breed, req.body.owner, req.body.url])
        .then ((response:any): void => {
            res.sendStatus(201);
        })
        .catch((err: string): void => {
            console.log( err );
            res.sendStatus(500);
        })        
    }
);

/**
 * DELETE route template
 */
router.delete(
    '/',
    (req: Request, res: Response, next: express.NextFunction): void => {
        console.log('made it to server Pet DELETE', req.body);
        const queryString: string = `DELETE FROM "pet" WHERE "id" = $1;`; 
        pool.query(queryString, [req.body.pet_id])
        .then ((response:any): void => {
            res.sendStatus(201);
        })
        .catch((err: string): void => {
            console.log( err );
            res.sendStatus(500);
        })        
    }
);

//PUT route

router.put(
  "/checkin/:id",
  (req: Request, res: Response, next: express.NextFunction): void => {
    console.log("made it to server Pet PUT", req.params);
    const queryString: string = `UPDATE "pet"   
        SET "check_in" = TRUE 
        WHERE "id" = $1;`;
    pool
      .query(queryString, [req.params.id])
      .then((response: any): void => {
        res.sendStatus(201);
      })
      .catch((err: string): void => {
        console.log(err);
        res.sendStatus(500);
      });
  }
);

router.put(
  "/checkout/:id",
  (req: Request, res: Response, next: express.NextFunction): void => {
    console.log("made it to server Pet PUT", req.params);
    const queryString: string = `UPDATE "pet"   
        SET "check_in" = FALSE 
        WHERE "id" = $1;`;
    pool
      .query(queryString, [req.params.id])
      .then((response: any): void => {
        res.sendStatus(201);
      })
      .catch((err: string): void => {
        console.log(err);
        res.sendStatus(500);
      });
  }
);

export default router;

