# API REST - Express: CRUD Produtos e Categorias

> Overview da aplicação.

## 📑 Sobre o projeto

Aplicação feita utilizando o node.js, atrávés do microframework Express, onde construi um CRUD e através da lib [node-postgres](https://node-postgres.com/) que foi utilizada para se conectar ao banco de dados. Foi desenvolvido durante a terceira sprint do quarto módulo referente ao curso FullStack da Kenzie Academy Brasil, sendo o primeiro módulo focado totalmente em Back-End.

Nessa entrega foi desenvolvido um serviço de back-end responsável por gerenciar produtos e suas categorias.

## ✍🏻 As entidades (tabelas) que fazem parte desse contexto são as seguintes:

Aa entidades foram feitas a partir da interpretação das informações contidas no [Diagrama ER](https://conteudo-kenzie-fullstack.vercel.app/modulo_4/sprint_4/5_entrega/img/diagrama.png) fornecido pela Kenzie Academy Brasil:
  
- Categorias;
- Produtos;

---

<img align="right" alt="Diagrama ER" width="1000" height="300" src="https://conteudo-kenzie-fullstack.vercel.app/modulo_4/sprint_4/5_entrega/img/diagrama.png">  


---


## ✍🏻 ROTAS

A aplicação conta com as seguintes rotas:

Endpoints do serviço:

| Método        | Endpoint                         | Responsabilidade                   |
|---------------| ---------------------------------|------------------------------------|
| POST          | /categories                      | Criação de categorias              |
| GET           | /categories                      | Lista todos as categorias          |
| GET           | /categories/:id                  | Retorna os dados de uma categoria  |
| PATCH         | /categories/:id                  | Atualiza os dados de uma categoria |
| DELETE        | /categories/:id                  | Deleta categorias do banco         |
| POST          | /products                        | Criação de produtos                |
| GET           | /products                        | Lista todos os produtos            |
| GET           | /products/:id                    | Retorna os dados de um produto     |
| GET           | /products/category/:category_id  | Retorna os dados de um produto     |
| PATCH         | /products/:id                    | Atualiza os dados de um produto    |
| DELETE        | /products/:id                    | Deleta produtos do banco           |

## 🛠 Bibliotecas

Utiliza as seguintes bibliotecas de suporte:

- Uuid - responsavel por criar um id unico;
- Yup - validar certas informações passadas pelo usuário, e retornar avisos para o mesmo;
- Nodemon - reiniciar automaticamente a aplicação quando e detectadas mudanças nos arquivo do diretório;
- Sucrase - possibilita o uso de certas features provenients do ECS6;
- Jest - framework javaScript para testes;
- Node-postgres - cliente postgres para node.js, feito em javascript puro.


