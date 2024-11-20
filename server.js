import express from "express";

//criando uma lista, com colchetes, e objetos, entre chaves, 
const posts = [
  {
    id: 1,
    descricao: "Foto de amsterdan", 
    imgUrl: "https://i.ibb.co/9NKw1fw/Image-01.jpg",
  },
    {
      id: 2,
      descricao: "Foto de Barcelona",
      imgUrl: "https://i.ibb.co/LP2fwV2/Image-02.jpg "
    },
    {
      id: 3,
      descricao: "Foto de Barcelona",
      imgUrl: "https://i.ibb.co/HPNqTQr/Image-03.jpg"
    },
   
];

const app = express();
app.use(express.json()); //Servidor você vai converter e devolver em json

app.listen(3000, () => {
  console.log("Servidor escutando..."); //O servidor está ouvindo requisções que chegam à porta 3000
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
}); //Definindo requisição e resposta, criando uma rota com o método GET 

//Função vai no array e pegar o post que quer dentro de uma estrutura. É lógica de programação usando javascript. Criando uma função buscando pelo index
function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

//A requisição vai buscar o post pelo ID
app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id)
  res.status(200).json(posts[index]);
}); 