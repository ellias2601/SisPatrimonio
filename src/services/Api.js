import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://192.168.0.115:3013/'
});

export default Api;
