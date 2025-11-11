const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
// const API_BASE_URL = 'http://16.16.253.155:8000/api';

export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: `${API_BASE_URL}/auth/login`,
        SIGNUP: `${API_BASE_URL}/auth/register`,
    }
};

export default API_ENDPOINTS;