// Routes: liga cada endereço e método HTTP à função do controller.
import { Router } from 'express';
import { listar, buscarPorId } from '../controllers/categoriasController.js';

const cateRouter = Router();

cateRouter.get('/listar', listarCategorias);
cateRouter.get('/categorias/:id', buscarCategoriaPorId);

export default cateRouter;