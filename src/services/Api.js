import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://10.0.0.141:3013/'
});

export default Api;
