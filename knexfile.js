// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./db/dev.sqlite3",
    },
    useNullAsDefault: true,
    debug: false,
  },
  production: {
    client: "sqlite3",
    connection: {
      filename: "./db/dev.sqlite3",
    },
    useNullAsDefault: true,
    debug: false,
  },

  /*
  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  */
};
