import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  base: "/", // GitHub Pagesのためのベースパス
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5173", // サーバーのアドレスに合わせる
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      // 必要に応じてエイリアスを設定
    },
  },
  build: {
    outDir: "docs", // ビルド出力ディレクトリを`docs`に設定
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
