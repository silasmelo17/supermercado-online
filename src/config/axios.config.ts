
import axios from 'axios';



const api = axios.create({
    baseURL: process.env.URL_API || 'https://supermercado-online-api.herokuapp.com/api'
});

export default api;
