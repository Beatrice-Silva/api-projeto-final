// Routes: liga cada endereço e método HTTP à função do controller.
import { Router } from 'express';
import { listar, buscarPorId } from '../controllers/servicosController.js';

const servRouter = Router();

servRouter.get('/', listar);
servRouter.get('/:id', buscarPorId);

export default servRouter;