// knexの設定オブジェクトを直接インポートする
import { knex } from "knex/knex.mjs";
import knexfile from "/home/mashimashi/Desktop/Recikeep/backend/knexfile";

const environment = process.env.NODE_ENV || "development";
const config = knexfile[environment];

// knex関数を使用してインスタンスを作成
const db = knex(config);

export default db;
