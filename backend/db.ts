// db.ts
import knex from "knex";
import knexfile from "/home/mashimashi/Desktop/Recikeep/backend/knexfile.ts"; // knexfileのパスはプロジェクトの構成によって変更してください

const environment = process.env.NODE_ENV || "development"; // 'development' はデフォルトの環境
const config = knexfile[environment]; // knexfileから正しい環境設定を取得

const db = knex(config); // Knexインスタンスを作成

export default db; // 作成したインスタンスをエクスポート
