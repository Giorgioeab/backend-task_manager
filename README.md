# Backend Task Manager

## Descrição

Este é o backend de um gerenciador de tarefas. Ele fornece uma API RESTful para gerenciar uma lista de tarefas a fazer e concluídas.

## Tecnologias Utilizadas

-   Node.js
-   Express.js
-   MongoDB (ou outro banco de dados, dependendo da configuração)
-   Outras dependências listadas no `package.json`

## Pré-requisitos

-   Node.js (versão 22.14.0 ou superior)
-   MongoDB instalado e em execução
-   Um gerenciador de pacotes como npm ou yarn

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/Giorgioeab/backend-task_manager.git
    cd backend-task_manager
    ```

2. Instale as dependências:

    ```bash
    npm install ou npm i
    ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

    ```
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_NAME=nome_do_seu_banco_de_dados_aqui
    ```

    Em seguida, construa a `MONGO_URI` dinamicamente no código do projeto.

## Executando o Projeto

### Ambiente de Desenvolvimento

```bash
npm run start:dev
```

### Ambiente de Produção

```bash
npm start
```

## Estrutura do Projeto

```
backend-task_manager/
├── src/
│   ├── controllers/    # Lógica dos controladores
│   ├── database/       # Conexão com o banco de dados
│   ├── errors/         # Middlewares de erros personalizados
│   ├── models/         # Modelos do banco de dados
│   └── routes/         # Rotas da API
├── .env                # Variáveis de ambiente
├── package.json        # Dependências e scripts
└── README.md           # Documentação do projeto
```

## Endpoints da API

### Tarefas

-   `GET /tasks` - Listar todas as tarefas
-   `GET /tasks/:id` - Listar tarefa através do ID
-   `POST /tasks` - Criar uma nova tarefa
-   `PUT /tasks/:id` - Atualizar uma tarefa
-   `DELETE /tasks/:id` - Excluir uma tarefa

## Contribuindo

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
    ```bash
    git checkout -b minha-feature
    ```
3. Faça commit das suas alterações:
    ```bash
    git commit -m "Minha nova feature"
    ```
4. Envie para o repositório remoto:
    ```bash
    git push origin minha-feature
    ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).