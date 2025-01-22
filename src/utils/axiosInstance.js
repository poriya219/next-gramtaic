import axios from "axios";
import { getSession } from "next-auth/react";

// Axios Interceptor Instance
const AxiosInstance = axios.create({
    // baseURL: process.env.NEXT_PUBLIC_BASE_URL
});

AxiosInstance.interceptors.request.use(
    async(config) => {
        
        // const token = localStorage.getItem('token');
        // const accessToken = JSON.parse(token);

        const secret = process.env.NEXT_PUBLIC_AUTH_SECRET;
console.log('before session');

        const session = await getSession(); // Retrieve the session
        console.log('session:', session);
        
    if (session?.accessToken) {
    console.log('add token', session.accessToken);
    
      config.headers["User"] = `Bearer ${session.accessToken}`; // Add the token to headers
    }
    
        if(secret){
            
            if (config.headers) config.headers["Authorization"] = secret;
        }
        
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