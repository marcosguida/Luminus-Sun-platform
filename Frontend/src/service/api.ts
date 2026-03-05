import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3030/api',
})

api.interceptors.request.use((config) => {
    const userData = localStorage.getItem('userData');
    const token = userData ? JSON.parse(userData).token : null;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config
})