# Instabytes

Instabytes é uma aplicação simples de backend para gerenciar posts com imagens, utilizando JavaScript e MongoDB. A aplicação foi desenvolvida durante um programa de imersão e possui funcionalidades básicas como upload de imagens, geração de descrições automáticas para as imagens e operações em um banco de dados.

## Tecnologias e Ferramentas Utilizadas

- **Linguagem:** JavaScript 
- **Framework Web:** [Express.js](https://expressjs.com/)
- **Banco de Dados:** [MongoDB Atlas](https://www.mongodb.com/)
- **Upload de Arquivos:** [Multer](https://github.com/expressjs/multer)
- **Geração de Descrições:** Google Generative AI (modelo Gemini)
- **Gerenciamento de Variáveis de Ambiente:** [dotenv](https://github.com/motdotla/dotenv)
- **Controle de Versão:** Git e GitHub

## Estrutura do Projeto

```plaintext
insta-like/
│
├── config/                # Configurações da aplicação
│   └── dbConfig.js        # Conexão com o banco de dados MongoDB
│
├── controllers/           # Controladores para lógica das rotas
│   └── postsController.js # Manipulação das requisições relacionadas a posts
│
├── models/                # Camada de acesso aos dados
│   └── postsModel.js      # Modelos para interagir com o banco de dados
│
├── routes/                # Rotas da aplicação
│   └── postsRoutes.js     # Definição das rotas relacionadas a posts
│
├── services/              # Serviços externos
│   └── geminiService.js   # Integração com o Google Generative AI
│
├── uploads/               # Diretório para armazenar imagens
├── server.js              # Arquivo principal da aplicação
├── package.json           # Gerenciamento de dependências e scripts
```
## Funcionalidades
**1. CRUD de Posts**:

- Listar todos os posts cadastrados.
- Criar novos posts a partir de requisições JSON.
- Atualizar posts existentes, incluindo imagens e descrições.
- Fazer upload de imagens associadas aos posts.

**2. Upload de Imagens**:

- Imagens enviadas pelo cliente são armazenadas no diretório uploads/.
- As imagens são renomeadas para o ID gerado no banco.

**3. Geração de Descrições para Imagens**:

- A aplicação utiliza a API do Google Generative AI para gerar descrições automáticas (alt-text) para as imagens enviadas.

**4. Integração com MongoDB**:

- Utilização do MongoDB Atlas para armazenar e gerenciar os dados de forma eficiente.
