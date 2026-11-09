import { categorias } from '../data/categorias.js';

// GET api/categorias
export function listar(req, res){
    res.json(categorias)
}

export function buscarPorId(req, res){
  const id = Number(req.params.id)

  const categoria = categorias.find(c => c.id === id)

  if(!categoria){
    return res.status(404).json({
      erro: "Falha! Categoria não encontrado."
    })
  }

  res.json(categoria);
};