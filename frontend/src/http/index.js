import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Accept": 'application/json',
    }
});

export const sendOtp = (data) => api.post('/api/send-otp', data);
export const verifyOtp = () => api.post('/api/verify-otp');
export default api;