import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import bcrypt from "bcrypt";
import db from "/home/mashimashi/Desktop/Recikeep/backend/db";

const app = express();

//5173 はサーバーサイド側のポート番号
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
// ユーザー登録APIエンドポイント
app.post("/api/register", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // パスワードをハッシュ化
    const hashedPassword = await bcrypt.hash(password, 10);

    // データベースにユーザー情報を保存する
    const newUser = await db("users").insert({
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "ユーザー登録成功！", user: newUser });
  } catch (error) {
    if (error.code === "23505") {
      // ユニーク制約違反のエラーコード
      res
        .status(409)
        .json({ message: "このメールアドレスは既に使用されています。" });
    } else {
      console.error("Error during registration process", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
});
