import axios from "axios";
import { getSession } from "next-auth/react";

// Axios Interceptor Instance
const AxiosInstance = axios.create({
    baseURL: process.env.BASE_URL
});

AxiosInstance.interceptors.request.use(
    async(config) => {
        console.log('request url:', config.url);
        
        // const token = localStorage.getItem('token');
        // const accessToken = JSON.parse(token);
        const secret = process.env.AUTH_SECRET;

        const session = await getSession(); // Retrieve the session
    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`; // Add the token to headers
    }
        if(secret){
            if (config.headers) config.headers.Authorization = secret;
        }
        console.log('headers:', config.headers);
        
        return config;
    },
    (error) => {
        // Handle request errors here
        return Promise.reject(error);
    }
);

// Axios Interceptor: Response Method
AxiosInstance.interceptors.response.use(
    (response) => {        
        return response;
    },
    (error) => {
        // Handle response errors here
        return Promise.reject(error);
    }
);

export default AxiosInstance;