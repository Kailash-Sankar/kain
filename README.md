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
 yarn run knex migrate:make todos
 yarn run knex migrate:latest

// seeds
 yarn run knex seed:make tasks
 yarn run knex seed:run
```

## sample routes

```
/ - hello world
/health - health check

/api/v1/messages - list of messages
/api/v1/messages/err - throws an error

/graphql - messages list, message by id and add message
```

## todo

- .env
- docker build with pm2
