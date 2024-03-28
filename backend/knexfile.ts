const knexConfig = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3",
    },
    useNullAsDefault: true,
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations", // マイグレーションファイルの保存先ディレクトリを指定する
    },
  },
  production: {
    client: "sqlite3",
    connection: {
      filename: "./prod.sqlite3", // プロダクション用のSQLiteデータベースファイルのパスを指定する
    },
    useNullAsDefault: true,
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations", // マイグレーションファイルの保存先ディレクトリを指定する
    },
  },
};

export default knexConfig;
