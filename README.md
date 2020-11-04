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
/ - hello world
/health - health check

/api/v1/broadcasts - list of messages
/api/v1/broadcasts/err - throws an error

/graphql - broadcasts list, broadcast by id and add broadcast
(Refer examples in api_samples)
```

## todo

- .env
- docker build with pm2
