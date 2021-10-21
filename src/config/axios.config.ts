
import axios from 'axios';



const api = axios.create({
    // baseURL: "http://localhost:3000/api"
    baseURL: process.env.URL_API || 'https://supermercado-online-api.herokuapp.com/api'
});

export default api;
