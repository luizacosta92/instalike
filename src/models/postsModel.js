import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Carrega as variáveis de ambiente a partir do arquivo .env (dotenv/config)
// Permite utilizar variáveis de ambiente como a STRING_CONEXAO diretamente no código
import 'dotenv/config';

// Importa a função ObjectId do MongoDB para manipular IDs de documentos
import { ObjectId } from "mongodb";

// Importa a função para conectar ao banco de dados
import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados MongoDB usando a string de conexão obtida do arquivo .env
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
  // Obtém o banco de dados 'imersao-instabytes' da conexão estabelecida
  const db = conexao.db("imersao-instabytes");
  // Obtém a coleção 'posts' dentro do banco de dados
  const colecao = db.collection("posts");
  // Executa uma consulta para encontrar todos os documentos na coleção 'posts'
  // e retorna um array com os resultados
  return colecao.find().toArray();
}

// Função assíncrona para criar um novo post no banco de dados
export async function criarPost(novoPost) {
  // Obtém o banco de dados e a coleção 'posts'
  const db = conexao.db("imersao-instabytes");
  const colecao = db.collection("posts");
  // Insere um novo documento (o novo post) na coleção e retorna o resultado da operação
  return colecao.insertOne(novoPost);
}

// Função assíncrona para atualizar um post existente no banco de dados
export async function atualizarPost(id, novoPost) {
  // Obtém o banco de dados e a coleção 'posts'
  const db = conexao.db("imersao-instabytes");
  const colecao = db.collection("posts");
  // Converte o ID fornecido em uma instância de ObjectId do MongoDB
  const objID = ObjectId.createFromHexString(id);
  // Atualiza o documento com o ID correspondente, substituindo os campos com os novos valores
  return colecao.updateOne({ _id: new ObjectId(objID) }, { $set: novoPost });
}