# PI Digital House | Estúdio Aires
</br>
O Projeto Integrador tem como proposta construir uma aplicação web para uma empresa de fotografia, especializada na prestação de serviços imobiliários.

A ideia principal, é oferecer uma plataforma em que os clientes possam agendar suas demandas por imagens (fotografias, vídeos, imagens aéreas etc). Para que este serviço seja possível, existem dois lados que precisam ser organizados para que a jornada do usuário funcione de forma fluida.

</br>

## Lado do cliente
----
</br>

No sistema, este usuário é o cliente e é mencionado como **usuário**.

- Cadastro do usuário
- Acesso à _dashboard_ para que faça o orçamento do serviço desejado;
- Seleciona data / horário para prestação do serviço;
- Cobrança e pagamento são feitos online.

</br>

## Lado fornecedor (fotógrafo)
----
</br>

No sistema, este usuário é tratado como **membro**.

- Cadastro do usuário
- Acesso à _dashboard_ para gestão de agenda;

Para os dois tipos de usuário, é possível visualizar em suas _dashboards_ o status de cada serviço e seus detalhamentos.

</br>

## Mapa do Site
----
</br>

```
Home
├── Serviços
├── Quem Somos
└── Contato
    ├── Login Usuário
    │   ├── Meu Perfil
    │   ├── Solicitações
    │   ├── Novo Orçamento
    │   └── Alterar seus dados
    └── Login Membro
        ├── Meu Perfil
        ├── Jobs Finalizados
        └── Minha Agenda
```

Há também um acesso Admin, para que seja possível administrar os usuários membro.

```
Dashboard Admin
├── Cadastrar Membro
├── Ver Membros Cadastrados
└── Ver Solicitações
```

</br>

## Seeds
----
</br>

Durante o desenvolvimento do projeto, criamos três _seeds_ que são utilizadas para popular as informações no banco de dados e tornam o sistema funcional.

**Seed de Usuários**

- **_Login_**: lula@pt.com.br
- **_Senha_**: 12345

**Seed de Membros**

- **_Login_**: dilma@pt.com.br
- **_Senha_**: 12345

**Seed de Admin**

- **_Login_**: admin2021
- **_Senha_**: 1234

Este _login_ pode ser acessado através da rota `localhost:3000/admin`.

</br>

## Para rodar o projeto
----
</br>

- Rodar o _script_ do banco de dados (`DBStudioAires.sql`);
- Rodar o `npm i` para instalar as dependências do projeto;
- Instalar o [`.env`](https://www.npmjs.com/package/dotenv). O modelo está na pasta como `.env-example`;
- No terminal, rodar o comando `npm start`;
- No navegador, acessar a rota `localhost:3000`.

</br>

## Tecnologias Utilizadas
----
</br>

- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [NodeJS](https://nodejs.org/en/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [EJS](https://www.npmjs.com/package/ejs)
- [MySql](https://www.mysql.com/)

</br>

## Restrições do projeto
----
</br>

Este foi um projeto realizado no decorrer do curso de formação de [Desenvolvimento Web Full Stack da Digital House](https://www.digitalhouse.com/br/curso/desenvolvimento-web-full-stack), com a finalidade de colocar em prática os conceitos aprendidos no decorrer do curso.
</br>

**Restrições:**

- Otimização do código, eliminando códigos repetidos;
- Componentização de código, para melhor organização do projeto;
- Revisão do código para correção de _bugs_ e implementação completa de responsividade;

</br>

## Sobre o Banco de Dados
----
</br>

O banco de dados do projeto, tem um _bug_ não foi resolvido, sobre o `auto_increment` de algumas tabelas. Ao rodar o _script_ retirado do MySql, o `auto_increment` adiciona números aleatórios. Para corrigir este comportamento, a cada vez que rodamos o _script_, corrigimos o incremento de cada tabela.

O arquivo incluido neste repositório, já tem esta correção implementada.

</br>

## Autores
----
</br>

<section>
<div class="autor1">
    <a href="https://blog.rocketseat.com.br/author/thiago/">
    <img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/380327?s=460&u=61b426b901b8fe02e12019b1fdb67bf0072d4f00&v=4" width="100px;" alt=""/>
    <br />
    <sub><b>Thiago Marinho</b></sub></a> <a href="https://blog.rocketseat.com.br/author/thiago//" title="Rocketseat">🚀</a>
</div>

<div class="autor2">
    <a href="https://blog.rocketseat.com.br/author/thiago/">
    <img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/380327?s=460&u=61b426b901b8fe02e12019b1fdb67bf0072d4f00&v=4" width="100px;" alt=""/>
    <br />
    <sub><b>Thiago Marinho</b></sub></a> <a href="https://blog.rocketseat.com.br/author/thiago//" title="Rocketseat">🚀</a>
</div>

<div class="autor3">
    <a href="https://blog.rocketseat.com.br/author/thiago/">
    <img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/380327?s=460&u=61b426b901b8fe02e12019b1fdb67bf0072d4f00&v=4" width="100px;" alt=""/>
    <br />
    <sub><b>Thiago Marinho</b></sub></a> <a href="https://blog.rocketseat.com.br/author/thiago//" title="Rocketseat">🚀</a>
</div>
<!-- </section> -->

<!-- <section class="second-row"> -->
<div class="autor4">
    <a href="https://blog.rocketseat.com.br/author/thiago/">
    <img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/380327?s=460&u=61b426b901b8fe02e12019b1fdb67bf0072d4f00&v=4" width="100px;" alt=""/>
    <br />
    <sub><b>Thiago Marinho</b></sub></a> <a href="https://blog.rocketseat.com.br/author/thiago//" title="Rocketseat">🚀</a>
</div>

<div class="autor5">
    <a href="https://blog.rocketseat.com.br/author/thiago/">
    <img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/380327?s=460&u=61b426b901b8fe02e12019b1fdb67bf0072d4f00&v=4" width="100px;" alt=""/>
    <br />
    <sub><b>Thiago Marinho</b></sub></a> <a href="https://blog.rocketseat.com.br/author/thiago//" title="Rocketseat">🚀</a>
</div>
</section>

<style>
    section{
        display: flex;
        justify-content: space-around;
    }

    .second-row{
        margin-top: 2rem;
    }
</style>

<!-- 
Feito com ❤️ por Thiago Marinho 👋🏽 Entre em contato!

[![Twitter Badge](https://img.shields.io/badge/-@tgmarinho-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/tgmarinho)](https://twitter.com/tgmarinho) [![Linkedin Badge](https://img.shields.io/badge/-Thiago-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/tgmarinho/) 
[![Gmail Badge](https://img.shields.io/badge/-tgmarinho@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tgmarinho@gmail.com)](mailto:tgmarinho@gmail.com)

 -->
<!-- 


 - [Amanda Cardoso](https://github.com/cardoso24)
- [Camila Queiroz](https://github.com/camimq)
- [Henrique Balsimelli](https://github.com/henriquepbalsimelli)
- [Mariana Brodersen](https://github.com/MPBRODERSEN)
- [Matheus Pierro](https://github.com/matheusPierro)
 -->
