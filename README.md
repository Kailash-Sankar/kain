# kain

Koa boilerplate with essentials for poc projects/hackathons

## Middlewares

- helmet - security headers
- CORS
- body parser
- access logs
- routing
- knex - migrations and seeds, cursor on context, sqlite3 example
- grahql - queries and mutations

## setup

clone repo

```js
 yarn install

 yarn start
```

Runs with nodemon on dev

## knex snippets

```js
// migrations
 yarn run knex migrate:make broadcasts
 yarn run knex migrate:latest

// seeds
 yarn run knex seed:make broadcasts
 yarn run knex seed:run
```

## sample routes

```
Import insomina/postman file api_samples for examples

GET  / - hello world
GET  /health - health check

use prefix - 'api/v1' for all below API's

# template apis
GET  /broadcasts - list of messages
GET  /broadcasts/err - throws an error

GET  /user/:conversationId - returns matching user profile
POST /user - adds new user
GET  /user/:conversationId/alerts - returns all alerts for the user

GET  /alert/all - all alerts
GET  /alert/:alertId - alert by id
POST /alert -  adds a new alert

/graphql - broadcasts list, broadcast by id and add broadcast

```

## todo

- .env
- docker build with pm2
