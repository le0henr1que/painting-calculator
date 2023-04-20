import express, { NextFunction, Request, Response } from "express";

import cors from "cors";

// import { errorMiddleware } from './middlewares/error/errorMiddleware';
import { corsOptions } from "./config/server";
// import swaggerUI from 'swagger-ui-express';
// import swaggerDocument from './utils/config/swagger.json';
const app = express();

app.use(express.json());
// app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(cors(corsOptions));

// app.use(errorMiddleware);

export { app };
