import axios from 'axios';

const service = axios.create({
    baseURL: '/api'
});


service.interceptors.request.use(
    (config) => {
        // 在這裡加入您的邏輯
        return config;
    },
    (error) => {
        // 在這裡加入您的邏輯
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    (response) => {
        // 在這裡加入您的邏輯
        return response.data;
    },
    (error) => {
        // 在這裡加入您的邏輯
        return Promise.reject(error);
    }
);

export default service;
