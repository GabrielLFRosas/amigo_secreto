import axios from "axios";
import App from './App'

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export default api;