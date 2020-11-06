// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./.data/sqlite.db",
    },
    useNullAsDefault: true,
    debug: false,
  },
  production: {
    client: "sqlite3",
    connection: {
      filename: "./.data/sqlite.db",
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
