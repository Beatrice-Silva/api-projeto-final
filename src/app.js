import express from 'express'
//import {Router} from 'express'

import servRouter from './routes/servicosRouter';
import { listar, buscarPorId, criar, deletar, atualizar} from '/controllers/servicosController';



const app = express();
app.use(express.json());
app.get('/health', (req, res) => {
  res.json({ status: 'ok', horario: new Date().toISOString() });
});

/*
app.get('/', (req, res) => {
  res.json({
    nome: 'API LarMar Resort',
    versao: '0.2.0',
    rotas: [
      'GET /api/servicos',
      'GET /api/servicos/id',
      'PUT /api/servicos/id',
    ],
  });
});*/

servRouter.get('/');
servRouter.get('/', listar);
servRouter.get('/:id', buscarPorId);
servRouter.get('/', criar);
servRouter.get('/:id', deletar);
servRouter.get('/:id', atualizar);

app.use((req, res) => {
  res.status= (404).json({erro:`Rota ${req.method} 
    ${req.path} nao existe`})

})

app.use((erro, req, res, next) =>{
    if (erro.type === 'enity.parse.failed'){
      return res.statys(400).json({erro: 'JSON inválido no corpo darequisição'})
    }
    console.error(erro)
    res.status(500).json({Erro: 'Erro interno no servidor'})

  });

export default app;



/*
porta publica
raw JSON*/