# Tech_Challeng_CRUD
Projeto Livraria Tech Challenge
Este projeto é uma aplicação Node.js com Express e MongoDB para gerenciar uma livraria. Inclui operações de CRUD (Create, Read, Update, Delete) para livros.

## Estrutura de Arquivos

server.js: Configura e inicia o servidor Express.

.gitignore: Define arquivos e pastas que devem ser ignorados pelo Git.

.env: Contém variáveis de ambiente, incluindo a string de conexão com o MongoDB.

app.js: Configura a aplicação Express e a conexão com o banco de dados.

routes/index.js: Define as rotas principais da aplicação.

routes/livrosRoutes.js: Define as rotas específicas para o recurso de livros.

models/Livros.js: Define o modelo de dados para os livros.

controllers/livroController.js: Contém a lógica de controle para as operações de livros.

config/dbConnect.js: Configura a conexão com o banco de dados MongoDB.

## Configuração


Instalação das Dependências:

bash
Copiar código
npm install
Configuração do Banco de Dados:

Crie um arquivo .env na raiz do projeto com a seguinte variável:


Copiar código
DB_CONNECTION_STRING=mongodb+srv://<usuario>:<senha>@<cluster>/<database>?retryWrites=true&w=majority&appName=<appName>
Iniciando o Servidor:

Para iniciar o servidor, execute:

bash
Copiar código
npm start
O servidor estará disponível em http://localhost:3000.

Rotas
GET / - Página base.
GET /livros - Lista todos os livros.
GET /livros/:id - Lista um livro específico por ID.
POST /livros - Cadastra um novo livro.
PUT /livros/:id - Atualiza um livro existente por ID.
DELETE /livros/:id - Exclui um livro por ID.

Dependências
dotenv: Para gerenciar variáveis de ambiente.
express: Framework web para Node.js.
mongoose: ODM para MongoDB.


