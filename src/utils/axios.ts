// axios.ts
import axios, { AxiosInstance } from "axios";

interface CustomAxiosInstance extends AxiosInstance {
  // 必要に応じてカスタムメソッドやプロパティを追加
}

const instance: CustomAxiosInstance = axios.create({
  baseURL: "http://localhost:5173/api",
  timeout: 10000,
});

export default instance;
