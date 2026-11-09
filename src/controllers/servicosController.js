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