import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000'
});

instance.interceptors.request.use(config => {
    config.headers.Authorization = 'Bearer SOME_TOKEN'; // For example purposes
    return config;
}, error => {
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    return response;
}, error => {
    // Handle global error actions here
    return Promise.reject(error);
});

export default instance;
