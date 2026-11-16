import { servicos } from '../data/servicos.js';

export function listar(req, res){
    res.json(servicos)
}

export function buscarPorId(req, res){
  const id = Number(req.params.id)

  const servico = servicos.find(s => s.id === id)

  if(!servico){
    return res.status(404).json({
      erro: "Falha! Serviço não encontrado."
    })
  }

  res.json(servico);
};

// req.body vem vazio (undefined) se o cliente não enviar JSON; ?? {} evita o erro
  
export function criar(req, res) {
  const { titulo, prioridade, status } = req.body ?? {};
  if (!titulo) {
    return res.status(400).json({ erro: 'O campo titulo é obrigatório' });
  }
  const novoId = chamados.length > 0 ? chamados[chamados.length - 1].id + 1 : 1;
  
  const novo = {
    id: novoId,
    consulta,
    duraçãominima,
    preço,
    status: status ?? 'aberto',
    categoriaId,
  };
  servicos.push(novo);
  res.status(201).json(novo);
}

// PUT /api/chamados/:id

export function atualizar(req, res) {
  const id = Number(req.params.id);
  const posicao = servicos.findIndex((c) => c.id === id);
  if (posicao === -1) {
    return res.status(404).json({ erro: 'Serviço não encontrado' });
  }
  const dados = req.body ?? {};

  // junta o que já existia com o que chegou; o id nunca muda
  const atualizado = { ...chamados[posicao], ...dados, id };
  chamados[posicao] = atualizado;
  res.json(atualizado);
}

// DELETE /api/chamados/:id
export function excluir(req, res) {
  const id = Number(req.params.id);
  const posicao = servicos.findIndex((c) => c.id === id);
  if (posicao === -1) {
    return res.status(404).json({ erro: 'Chamado não encontrado' });
  }
  servivos.splice(posicao, 1);
  res.status(204).send();
}


