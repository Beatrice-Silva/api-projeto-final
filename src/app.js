// app.js: monta a aplicação Express (rotas, middlewares).
// Quem liga o servidor é o server.js. Separar os dois facilita testes e o deploy.
import express from 'express';

const app = express();

const usuarios = [
{
  "id" : "1",
  "nome" : "Raissa Molina",
  "email" : "raissa@email.com",
  "PerfiLRole" : "Admin"
},
{
  "id" : "2",
  "nome" : "Josephine Cleopatra Yuson",
  "email" : "JoYuson@email.com",
  "PerfilRole" : "Admin"
},
{
  "id" : "3",
  "nome" : "Raww",
  "email" : "werewolf@email.com",
  "PerfilRole" : "Cliente"
},
{
  "id" : "4",
  "nome" : "Reinaldo",
  "email" : "reinaldo@email.com",
  "PerfilRole" : "Cliente"
}

];

const servicos = [
{
  id : "1",
  "Consulta" : "Massagens",
  "Duração" : "3h 30 minutos",
  "Consulta" : "2400 peso filipino",
  "status" : "inativo"
},{
  id : "2",
  "Consulta" : "Restaurante",
  "Duração" : "1h 30 minutos",
  "Consulta" : "2400 peso filipino",
  "status" : "ativo"
},{
  id : "3",
  "Consulta" : "Sauna",
  "Duração" : "3h",
  "Consulta" : "2400 peso filipino",
  "status" : "inativo"
},{
  id : "4",
  "Consulta" : "Show de música",
  "Duração" : "2h 30 minutos",
  "Consulta" : "1400 peso filipino",
  "status" : "ativo"
},{
  id : "5",
  "Consulta" : "Massagens",
  "Duração" : "3h 30 minutos",
  "Consulta" : "2400 peso filipino",
  "status" : "inativo"
}
]

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

app.get('/api/servicos/:id', (req, res) => {
  const id = Number(req.params.id)

  const servicos = servicos.find((l) => l.id === id)

  if(!servicos){
    return res.status(404).json({
      erro: "Falha! Serviço não encontrado."
    })
  }

  res.json(servicos);
});


export default app; //ctrl C