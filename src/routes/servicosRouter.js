// Routes: liga cada endereço e método HTTP à função do controller.
import { Router } from 'express';
import { listar, buscarPorId } from '../controllers/servicosController.js';

const servRouter = Router();

servRouter.get('/listar', listarServicos);
servRouter.get('/servicos/:id', buscarServicoPorId);

export default servRouter;