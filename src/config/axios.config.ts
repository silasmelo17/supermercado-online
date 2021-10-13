
import axios from 'axios';



const api = axios.create({
    // baseURL: "https://supermercado-online-api.herokuapp.com/api",
    baseURL: 'http://localhost:3000/api'
});

export default api;
