# Recikeep - Your Digital Recipe Keeper

Recikeepは、お気に入りのレシピを保存し、簡単にアクセスできるデジタルレシピキーパーです。このプロジェクトはReact, TypeScript, Viteを使用して構築されており、開発時にはHMR（Hot Module Replacement）を活用し、ESLintのルールをいくつか適用しています。

## プロジェクトの特徴

- React + TypeScriptでの開発体験
- Viteによる高速なビルドとHMR
- ESLintによるコード品質の向上

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

## プラグイン

現在、以下の公式プラグインを使用しています:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)：Babelを使用してFast Refreshを提供
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)：SWCを使用してFast Refreshを提供

## ESLint設定の拡張

開発中のアプリケーションに対してより厳密なルールを適用するためには、以下のように設定を更新します:

```js
export default {
  // 他のルール...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```
