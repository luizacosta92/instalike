import 'dotenv/config';
import { ObjectId } from "mongodb"
import conectarAoBanco from "../config/dbConfig.js"
// Conecta ao banco de dados MongoDB usando a string de conexão fornecida no ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// Função assíncrona para obter todos os posts do banco de dados.
export async function getTodosPosts() {
  const db = conexao.db("imersao-instabytes") //// Obtém o banco de dados 'imersao-instabytes' da conexão.
  const colecao = db.collection("posts") // Obtém a coleção 'posts' do banco de dados.
  return colecao.find().toArray() // Executa uma consulta para encontrar todos os documentos na coleção 'posts' e retorna um array com os resultados.
}

export async function criarPost(novoPost) {
  const db = conexao.db("imersao-instabytes"); 
  const colecao = db.collection("posts"); 
  return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
  const db = conexao.db("imersao-instabytes"); 
  const colecao = db.collection("posts"); 
  const objID = ObjectId.createFromHexString(id); 
  return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}