import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post('/', CarController.create);
routes.get('/', CarController.get);
routes.get('/:id', CarController.find);

export default routes;