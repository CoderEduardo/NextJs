# NextJs
Repositório criado para estudar NextJs

## Esse projeto é o front-end de uma aplicação teste de login

No arquivo src/app/login/page.tsx eu estou enviando os dados para o meu back-end atráves da action, onde vou fazer todo o tratamento dos dados e retornar um status para a aplicação

## Formatdo do projeto 

O formato do projeto é feito para consumir uma api rest feita com node js, o back-end está simples, pois o foco aqui é aprender o next js 

## Abordagem usada

Poderia fazer esse projeto usando a 'use client', renderizando a página no lado do cliente, mas aí não estaria usando o real diferencial do next, e sim fazendo um aplicação react normal..
Por isso escolhi fazer usando o SSR(Server-Side Rendering), renderizando a página no servidor, isso me ajuda no ranquemento da página, melhorando o SEO do site, pois ele é completamente rastreável pelos navegadores. 