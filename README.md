# Cadastro de Usuários com React e Node.js

Este projeto é uma aplicação web para cadastro de usuários. Ele permite criar, visualizar e remover usuários do sistema. O front-end foi desenvolvido com **React** usando **Vite** e o back-end com **Node.js** e **Prisma** para manipulação de dados em um banco de dados.

## Tecnologias

- **React**
- **Vite**
- **Axios** para requisições HTTP
- **Node.js**
- **Express**
- **Prisma** para gerenciamento de banco de dados
## Instalação

### Front-End (React/Vite)
1. Clone o repositório do front-end:
    ```bash
    git clone https://github.com/seu-usuario/front-end-repo.git
    ```
2. Entre na pasta do projeto:
    ```bash
    cd front-end-repo
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Rode o projeto:
    ```bash
    npm run dev
    ```

### Back-End (Node/Prisma)
1. Clone o repositório do back-end:
    ```bash
    git clone https://github.com/seu-usuario/back-end-repo.git
    ```
2. Entre na pasta do projeto:
    ```bash
    cd back-end-repo
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Configure o Prisma e o banco de dados:
    ```bash
    npx prisma migrate dev
    ```
5. Rode o servidor:
    ```bash
    npm run dev
    ```

## Como Usar

1. Na página inicial, você pode cadastrar um novo usuário preenchendo os campos de **nome**, **email** e **idade** e clicando no botão "Cadastrar".
2. A lista de usuários cadastrados será exibida abaixo do formulário.
3. Para remover um usuário, basta clicar no ícone de lixeira ao lado do respectivo usuário.

