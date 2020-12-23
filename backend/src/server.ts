import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import cors from 'cors';
import routes from '@shared/infra/http/routes';

import AppError from '@shared/errors/AppError';

import '@shared/infra/typeorm';
import '@shared/container';

import morgan from "morgan";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)
app.use(morgan('tiny'))

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
}); 

app.listen(3000, () => console.log('server started'));