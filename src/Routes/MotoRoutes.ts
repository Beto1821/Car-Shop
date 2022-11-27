import { Router } from 'express';
import MotoController from '../Controllers/MotoController';
import ValidId from '../Middlewares/ValidId';

const routes = Router();

routes.post('/', MotoController.create);
routes.get('/', MotoController.get);
routes.get('/:id', ValidId, MotoController.get);

export default routes;