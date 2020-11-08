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

## Database
 - create a folder .data in the root folder for sequelize to create db files
 - Use SQLite extension in vs code to view the tables and fields and data.

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
GET  /user/all - all users
POST /user - adds new user
POST /user/:conversationId  - update user meta data
GET  /user/:conversationId/alerts - returns all alerts for the user

GET  /alert/all - all alerts
GET  /alert/:alertId - alert by id
POST /alert -  adds a new alert

/graphql - broadcasts list, broadcast by id and add broadcast

```

## todo

- .env
- docker build with pm2
