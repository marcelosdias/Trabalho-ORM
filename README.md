# Trabalho para a disciplina de Banco de Dados Avançado

## Como executar o projeto
1. Clonar e Instalar
```
git clone https://github.com/marcelosdias/bda.git
cd bda
npm install
```
2. Gerar tabelas e popular banco
```
npm run knex:migrate
npm run knex:seeds
```
3. Criar arquivo .env na raiz do projeto e preencher os seguintes campos
```
PORT=
DATABASE_HOST=
DATABASE_SCHEMA=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_PORT=
```
4. Executar o servidor
```
npm start
```
## Tecnologias utilizadas
- Postgres
- Node
- Knex
- Objection
