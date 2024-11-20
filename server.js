import express from "express"; 
import routes from "./src/routes/postsRoutes.js";


/* **Dados de exemplo:** Uma lista de objetos representando posts.
 Em um cenário real, esses dados seriam obtidos do banco de dados.
const posts = [{ id: 1, descricao: "Foto de amsterdan", imgUrl: "https://i.ibb.co/9NKw1fw/Image-01.jpg",},
    {id: 2, descricao: "Foto de Barcelona", imgUrl: "https://i.ibb.co/LP2fwV2/Image-02.jpg "},
    {id: 3, descricao: "Foto de Barcelona", imgUrl: "https://i.ibb.co/HPNqTQr/Image-03.jpg"},];*/

// Cria uma instância do servidor Express.
const app = express();
routes(app);

// Inicia o servidor na porta 3000 e imprime uma mensagem no console.
app.listen(3000, () => {
  console.log("Servidor escutando..."); //O servidor está ouvindo requisções que chegam à porta 3000
});

