import { Router } from 'express';
import CarController from '../Controllers/CarController';
import ValidId from '../Middlewares/ValidId';

const routes = Router();

routes.post('/', CarController.create);
routes.get('/', CarController.get);
routes.get('/:id', ValidId, CarController.getById);
routes.put('/:id', ValidId, CarController.updateCar);

export default routes;