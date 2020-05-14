import express from 'express';
import bodyParser from 'body-parser';
import ownerRouter from './routes/owner.router';
import petRouter from './routes/pet.router';

const app: express.Application = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.use('/owner', ownerRouter);
app.use('/pet', petRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT: number | string = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, (): void => {
  console.log(`So awesome. Much wow. Listening on port: ${PORT}`);
});

export default app;
