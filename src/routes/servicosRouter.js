// Routes: liga cada endereço e método HTTP à função do controller.
import { Router } from 'express';
//import { listar, buscarPorId } from '../controllers/servicosController.js';
const servRouter = Router();

servRouter.get('/');
servRouter.get('/', listar);
servRouter.get('/:id', buscarPorId);
servRouter.get('/', criar);
servRouter.get('/:id', deletar);
servRouter.get('/:id', atualizar);

export default servRouter;