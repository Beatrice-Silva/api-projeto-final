// Controller: as regras de cada operação de servicos. Os dados vêm do banco (Prisma).
import { prisma } from '../lib/prisma.js';

// GET /api/servicos
export async function listar(req, res) {
  const servicos = await prisma.servico.findMany({ orderBy: { id: 'asc' } });
  res.json(servicos);
}

// GET /api/servicos/:id
export async function buscarPorId(req, res) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ erro: 'O id precisa ser um número' });
  }
  const servico = await prisma.servico.findUnique({ where: { id } });
  if (!servico) {
    return res.status(404).json({ erro: 'Serviço não encontrado' });
  }
  res.json(servico);
}

// POST /api/servicos
export async function criar(req, res) {
  // req.body vem vazio (undefined) se o cliente não enviar JSON; ?? {} evita o erro
  const { nome, duracaoMin, preco, status, categoriaId } = req.body ?? {};
  if (!nome) {
    return res.status(400).json({ erro: 'O campo nome é obrigatório' });
  }
  if (!categoriaId) {
    return res.status(400).json({ erro: 'O campo categoriaId é obrigatório' });
  }
  const categoria = await prisma.categoria.findUnique({ where: { id: Number(categoriaId) } });
  if (!categoria) {
    return res.status(400).json({ erro: 'categoriaId não existe' });
  }
  // campos que não chegaram ficam undefined: o banco usa o valor padrão ou deixa vazio
  const novo = await prisma.servico.create({
    data: {
      titulo,
      duracaoMinima,
      preco,
      status,
      categoriaId: categoria.id,
    },
  });
  res.status(201).json(novo);
}


// PUT /api/servicos/:id
export async function atualizar(req, res) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ erro: 'O id precisa ser um número' });
  }
  const existe = await prisma.servico.findUnique({ where: { id } });
  if (!existe) {
    return res.status(404).json({ erro: 'Serviço não encontrado' });
  }
  const dados = req.body ?? {};
  if (dados.nome === '') {
    return res.status(400).json({ erro: 'O campo nome não pode ficar vazio' });
  }

  // campos que não chegaram ficam undefined, e o Prisma não os altera
  const atualizado = await prisma.servico.update({
    where: { id },
    data: {
      nome: dados.nome,
      duracaoMin: dados.duracaoMin,
      preco: dados.preco,
      status: dados.status,
    },
  });
  res.json(atualizado);
}

// DELETE /api/servicos/:id
export async function excluir(req, res) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ erro: 'O id precisa ser um número' });
  }
  const existe = await prisma.servico.findUnique({ where: { id } });
  if (!existe) {
    return res.status(404).json({ erro: 'Serviço não encontrado' });
  }
  await prisma.servico.delete({ where: { id } });
  res.status(204).send();
}