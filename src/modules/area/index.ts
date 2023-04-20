import { calculatorAreaController } from './useCase/index';
import { Router } from 'express';
import { resolver } from '../../shared/resolver';

const calculateRoute = Router();

calculateRoute.post(
  '/calculate',
  resolver((request, response) => {
    return calculatorAreaController.handle(request, response);
  }),
);

export { calculateRoute };
