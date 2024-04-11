# Recikeep - Your Digital Recipe Keeper

Recikeepは、お気に入りのレシピを保存し、簡単にアクセスできるデジタルレシピキーパーです。このプロジェクトはReact, TypeScript, Viteを使用して構築されており、開発時にはHMR（Hot Module Replacement）を活用し、ESLintのルールをいくつか適用しています。

## プロジェクトの特徴

- React + TypeScriptでの開発体験: 型安全性とモダンなJavaScriptエコシステムの恩恵を享受できます。
- Viteによる高速なビルドとHMR: 開発サイクルを加速し、即時のフィードバックを提供します。
- ESLintによるコード品質の向上: コードの一貫性を保ち、一般的な問題を事前に検出します。
- 自動Lintとテスト: GitHub Actionsを利用して、プッシュごとにコードの品質を保証します。

## 使用している主な技術

- React
- TypeScript
- Vite
- ESLint
- Tailwind CSS for styling
- Axios
- Storybook
- React Hook Form
- Zod
- Prettier
- Express
- AWS amplify,Cognite（移行中）
- SQLite

## プラグイン

現在、以下の公式プラグインを使用しています:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)：Babelを使用してFast Refreshを提供
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)：SWCを使用してFast Refreshを提供

## 現在の作業状況

フロントエンド
各ページのcssを追加
AddRecipeページの修正
全体の整理

バックエンド
node.jsのフレームワークepressで簡易的なログイン機能の実装から

expressで簡易的なログイン機能を実装していたものをLambda関数に移行が完了し、expressのファイルを削除中
AWSのamplifyにデプロイ完了
デモデータで作成していたところをAPI機能に変換中
