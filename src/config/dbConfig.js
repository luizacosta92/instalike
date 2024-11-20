import { MongoClient } from 'mongodb';

/**
 * Conecta-se ao banco de dados MongoDB utilizando a string de conexão fornecida.
 * 
 * @param {string} stringConexao A string de conexão para o banco de dados MongoDB.
 * @returns {Promise<MongoClient>} Uma Promise que resolve com o cliente do MongoDB,
 *                                permitindo realizar operações no banco de dados.
 */
export default async function conectarAoBanco(stringConexao) {
  let mongoClient;

  try {
    // Cria um novo cliente MongoDB usando a string de conexão fornecida.
    mongoClient = new MongoClient(stringConexao);
    console.log('Conectando ao cluster do banco de dados...');

    // Tenta estabelecer a conexão com o banco de dados.
    await mongoClient.connect();
    console.log('Conectado ao MongoDB Atlas com sucesso!');

    // Retorna o cliente do MongoDB para realizar operações no banco de dados.
    return mongoClient;
  } catch (erro) {
    // Caso ocorra algum erro durante a conexão, imprime uma mensagem de erro no console
    // e encerra o processo.
    console.error('Falha na conexão com o banco!', erro);
    process.exit();
  }
}