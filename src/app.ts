import express from 'express';

import cors from 'cors';
import { calculateRoute } from './modules/area';
import { errorMiddleware } from './middlewares/error';
import { corsOptions } from './config/server';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from './utils/Swagger/index.json';
const app = express();

app.use(express.json());
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(cors(corsOptions));
app.use(calculateRoute);
app.use(errorMiddleware);

export { app };
