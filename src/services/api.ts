import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.0.1.105:3333'
  //  baseURL:'https://diogolimas.github.io/teste/'
});

export default api;
  //192.168.111.193