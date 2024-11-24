import fs from "fs";
import {getTodosPosts, criarPost, atualizarPost} from "../models/postsModel.js";
import { deepStrictEqual } from "assert";

export async function listarPosts(req, res) {
  // Chama a função para obter todos os posts do banco de dados.
  const posts = await getTodosPosts();
  // Envia os posts como resposta em formato JSON com status 200 (sucesso).
  res.status(200).json(posts);
}; //Definindo requisição e resposta, criando uma rota com o método GET 

export async function postarNovoPost(req, res) {
    const novoPost = req.body; //criando o body da requisição

    try { //fazendo um tratamento para excessão
       const postsCriado = await criarPost(novoPost); //mandando o conteúdo para o modelo conectar com o banco
       res.status(200).json(postsCriado); 
    } catch(erro) {
      console.error(erro.message);
      res.status(500).json({"Erro":"Falha na requisição"})
    }
    
};

export async function uploadImagem(req, res) {
  const novoPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: ""
}; //criando o body da requisição

  try { //fazendo um tratamento para excessão
     const postsCriado = await criarPost(novoPost); //mandando o conteúdo para o modelo conectar com o banco
     const imagemAtualizada = `uploads/${postsCriado.insertedId}.png` //Construir caminho para onde queremos salvar no servidor
     fs.renameSync(req.file.path, imagemAtualizada);
     res.status(200).json(postsCriado); 
  } catch(erro) {
    console.error(erro.message);
    res.status(500).json({"Erro":"Falha na requisição"})
  }
}

export async function atualizarNovoPost(req, res) {
  const id = req.params.id; 
  const urlImagem = `http://localhost:3000/${id}.png`
  const post = {
    imgUrl: urlImagem, 
    descricao: req.body.descricao,
    alt: req.body.alt
  }
  try { 
     const postsCriado = await atualizarPost(id, post);
     res.status(200).json(postsCriado); 
  } catch(erro) {
    console.error(erro.message);
    res.status(500).json({"Erro":"Falha na requisição"})
  }
  
};