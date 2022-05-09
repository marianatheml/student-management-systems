<div align="center">
 
<img src="https://i.imgur.com/zTM9qyW.png" alt="logo" width="150px">
<hr>
</div>
Sistema de gerenciamento de estudantes construído com o objetivo de ter um maior controle dos alunos cadastrados na rede escolar e também registrar novos alunos! 

</div>

<h2>Tecnologias Utilizadas</h2>
Esse projeto foi desenvolvido utilizando:
<ul>
  <li>JavaScript</li>
  <li>GraphQL</li>
  <li>MySQL</li>
  <li>NodeJS</li>
  <li>VS Code</li>
</ul>

<h2>Iniciando a Aplicação</h2>
<h3>Clone o repositório</h3>

Primeiro você deve clonar o repositório, como indicado abaixo:

```bash
git clone https://github.com/marianatheml/student-management-systems.git
```

<h3>Instalação</h3>

Usando o gerenciador de pacotes para o Node.JS [npm](https://www.npmjs.com/) para instalar as dependencias.

```bash
npm install
```

<h3>Variáveis de Ambiente</h3>

Para rodar a aplicação localmente, deve-se criar uma arquivo .env na raiz do projeto e acrescentar os seguintes parâmetros:

```bash
    DATABASE_HOST: '',
    DATABASE_PORT: ,
    DATABASE_USER: '',
    DATABASE_PASSWORD: ''

```
<h3>Criação do Banco de Dados</h3>

Após a criação e configuração do arquivo .env, se for nescessário criar o banco de dados, execute na linha de comando:

```bash
    cd src
    knex migrate:latest
```

<h3>Inicialização</h3>

Após toda configuração, execute iniciar a aplicação:

```bash
    npm start
```
