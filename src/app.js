// app.js: monta a aplicação Express (rotas, middlewares).
// Quem liga o servidor é o server.js. Separar os dois facilita testes e o deploy.
import express from 'express';
import { usuarios } from './data/usuarios';


const app = express();




// Permite receber JSON no corpo das requisições (usaremos no próximo encontro)
app.use(express.json());

// Rota de saúde: usada por serviços de nuvem para saber se a API está viva
app.get('/health', (req, res) => {
  res.json({ status: 'ok', horario: new Date().toISOString() });
});

// Rota raiz: apresenta a API
app.get('/api/', (req, res) => {
  res.json({
    nome: 'LarMar Resort',
    versao: '0.1.0',
    rotas: ['GET /health'],
  });
});

app.get('/api/servicos', (req, res) => {
  res.json(servicos);
});

app.get('/api/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/api/categorias', (req, res) => {
  res.json(categorias);
});

app.get('/api/usuarios/:id', (req, res) => {
  const id = Number(req.params.id)

  const usuario = usuarios.find(u => u.id === id)

  if(!usuario){
    return res.status(404).json({
      erro: "Falha! Serviço não encontrado."
    })
  }

  res.json(usuario);
});


app.get('/api/categorias/:id', (req, res) => {
  const id = Number(req.params.id)

  const categoria = categorias.find(c => c.id === id)

  if(!categoria){
    return res.status(404).json({
      erro: "Falha! Categoria não encontrado."
    })
  }

  res.json(categoria);
});


app.get('/api/servicos/:id', (req, res) => {
  const id = Number(req.params.id)

  const servico = servicos.find(s => s.id === id)

  if(!servico){
    return res.status(404).json({
      erro: "Falha! Serviço não encontrado."
    })
  }

  res.json(servico);
});


export default app; //ctrl C