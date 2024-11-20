import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
  // Permite que o servidor interprete o corpo das requisições como JSON.
app.use(express.json()); //Servidor você vai converter e devolver em json


// Rota para obter todos os posts.
app.get("/posts", listarPosts);
}

export default routes;