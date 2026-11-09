// Routes: liga cada endereço e método HTTP à função do controller.
import { Router } from 'express';
import { listar, buscarPorId } from '../controllers/usuariosController.js';

const usuRouter = Router();

usuRouter.get('/listar', listarUsuarios);
usuRouter.get('/usuarios/:id', buscarUsuarioPorId);

export default usuRouter;