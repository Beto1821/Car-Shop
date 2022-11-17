import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post('/', CarController.create);

export default routes;