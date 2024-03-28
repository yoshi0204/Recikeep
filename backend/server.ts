import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import bcrypt from "bcrypt";
import db from "/home/mashimashi/Desktop/Recikeep/backend/db"; // 確認してください。'./db' のパスが正しいかどうか、また、db モジュールが TypeScript で記述されているかどうか。

// 新しいExpress
const app = express();

// 使用するポート
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 5173;

// ミドルウェア
app.use(cors());

// ミドルウェアを適用
app.use(bodyParser.json());

// ルートエンドポイント
app.get("/", (req: Request, res: Response) => {
  res.send("Express Server is running");
});

// ログインAPIエンドポイント
app.post("/api/login", async (req: Request, res: Response) => {
  console.log("POST request received at /api/login with body:", req.body);
  const { email, password } = req.body;

  try {
    // データベースからユーザー情報を検索する
    const user = await db("users").where({ email }).first();

    if (user && (await bcrypt.compare(password, user.password))) {
      // パスワードが一致
      res.status(200).json({ message: "ログイン成功！" });
    } else {
      // ユーザーが見つからない、またはパスワードが一致しない
      res.status(401).json({ message: "認証に失敗しました。" });
    }
  } catch (error) {
    console.error("Error during login process", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// サーバーを指定されたポートで起動
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// 新しいエンドポイント
app.get("/some-route", async (req: Request, res: Response) => {
  try {
    const results = await db.select("*").from("some_table");
    res.json(results);
  } catch (error) {
    console.error("Error accessing the database", error);
    res.status(500).json({ message: "Internal server error" });
  }
});