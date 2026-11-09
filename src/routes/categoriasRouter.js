// Routes: liga cada endereço e método HTTP à função do controller.
import { Router } from 'express';
import { listar, buscarPorId } from '../controllers/categoriasController.js';

const cateRouter = Router();

cateRouter.get('/', listar);
cateRouter.get('/:id', buscarPorId);

export default cateRouter;