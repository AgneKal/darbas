import express from 'express';
import { OrderController } from '../contollers/order.controller';


const ordersRouter = express.Router();

ordersRouter.get('/', OrderController.getAll);
ordersRouter.get('/:id', OrderController.getOrder);
ordersRouter.post('/', OrderController.insert);
ordersRouter.delete('/:id', OrderController.delete);

export { ordersRouter };