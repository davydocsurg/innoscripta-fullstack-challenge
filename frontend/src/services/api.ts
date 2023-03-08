import axios from "axios";
import { API_BASE_URL, authToken } from "../constants";

const api = axios.create({
    baseURL: API_BASE_URL,
});

// request interceptor
api.interceptors.request.use((request) => {
    // check if token exists
    const token = JSON.parse(localStorage.getItem(authToken)!);

    if (token) {
        // set token to request header
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
});

export default api;
