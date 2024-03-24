import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcrypt';
import db from './db'; // 確認してください。'./db' のパスが正しいかどうか、また、db モジュールが TypeScript で記述されているかどうか。

// 新しいExpressアプリケーションのインスタンスを作成
const app = express();

// 使用するポートを設定（環境変数から取得、またはデフォルトで5173を使用）
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 5173;

// CORSを許可するためのミドルウェアを適用
app.use(cors());

// JSONのリクエストボディを解析するためのミドルウェアを適用
app.use(bodyParser.json());

// ルートエンドポイントの設定
app.get('/', (req: Request, res: Response) => {
  res.send('Express Server is running');
});

// ログインAPIエンドポイントの設定
app.post('/api/login', async (req: Request, res: Response) => {
  console.log('POST request received at /api/login with body:', req.body);
  const { email, password } = req.body;

  try {
    // データベースからユーザー情報を検索する処理
    const user = await db('users').where({ email }).first();

    if (user && (await bcrypt.compare(password, user.password))) {
      // パスワードが一致した場合
      res.status(200).json({ message: 'ログイン成功！' });
    } else {
      // ユーザーが見つからない、またはパスワードが一致しない場合
      res.status(401).json({ message: '認証に失敗しました。' });
    }
  } catch (error) {
    console.error('Error during login process', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// サーバーを指定されたポートで起動
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// 新しいエンドポイントの追加
app.get('/some-route', async (req: Request, res: Response) => {
  try {
    const results = await db.select('*').from('some_table');
    res.json(results);
  } catch (error) {
    console.error('Error accessing the database', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
