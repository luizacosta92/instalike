import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

const corsOptions = {
  origin: "http://localhost:8000", 
  optionsSuccessStatus: 200,
}

// Configura o armazenamento de arquivos utilizando o multer.
// Os arquivos serão armazenados na pasta 'uploads'.
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Define o diretório de destino para os arquivos.
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Utiliza o nome original do arquivo.
    }
});

// Cria uma instância do multer com as configurações de armazenamento.
const upload = multer({ dest: "./uploads", storage });

// Função para configurar as rotas da aplicação.
const routes = (app) => {
    // Permite que o servidor interprete o corpo das requisições como JSON.
    app.use(express.json());
    app.use(cors(corsOptions));

    // Rota para buscar todos os posts.
    // Chama a função `listarPosts` no controlador para obter todos os posts.
    app.get("/posts", listarPosts);

    // Rota para criar um novo post.
    // Chama a função `postarNovoPost` no controlador para criar um novo post.
    app.post("/posts", postarNovoPost);

    // Rota para fazer upload de uma imagem.
    // Utiliza o multer para processar o upload do arquivo.
    // Chama a função `uploadImagem` no controlador para salvar a imagem.
    app.post("/upload", upload.single("imagem"), uploadImagem);

    //Atualizar um registro que já existe
    app.put("/upload/:id", atualizarNovoPost);
};

export default routes;