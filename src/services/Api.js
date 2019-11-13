import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://10.4.6.52:3004/'
});

export default Api;
