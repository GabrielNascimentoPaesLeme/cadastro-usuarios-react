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
    git clone https://github.com/GabrielNascimentoPaesLeme/cadastro-usuarios-react
    ```
2. Entre na pasta do projeto:
    ```bash
    cd user-register
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
    git clone https://github.com/GabrielNascimentoPaesLeme/api-bd.git
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

    ## Acesse o Projeto Online

Você pode acessar o projeto em: [meu-projeto](https://cadastro-usuarios-react.onrender.com/)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_ com melhorias e correções.

## Como Usar

1. Na página inicial, você pode cadastrar um novo usuário preenchendo os campos de **nome**, **email** e **idade** e clicando no botão "Cadastrar".
2. A lista de usuários cadastrados será exibida abaixo do formulário.
3. Para remover um usuário, basta clicar no ícone de lixeira ao lado do respectivo usuário.

