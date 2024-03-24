// knexfile.ts

const knexConfig = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3",
    },
    useNullAsDefault: true,
  },
  staging: {
    client: "postgresql",
    connection: {
      database: "my_app",
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
  production: {
    // ここに production 環境の設定を追加
  },
};

export default knexConfig;
