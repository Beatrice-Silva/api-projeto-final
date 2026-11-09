import { usuarios } from '../data/usuarios.js';

export function listar(req, res){
    res.json(usuarios)
}


export function buscarPorId(req, res){
  const id = Number(req.params.id)

  const usuario = usuarios.find(u => u.id === id)

  if(!usuario){
    return res.status(404).json({
      erro: "Falha! Serviço não encontrado."
    })
  }

  res.json(usuario);
};