import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://10.0.0.141:3009/'
});

export default Api;
