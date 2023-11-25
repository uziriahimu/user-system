import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { UserRoutes } from './modules/user/user.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());
app.use('/api/users', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Working');
});

export default app;
