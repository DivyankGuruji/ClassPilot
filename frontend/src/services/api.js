/**
 * ==========================================
 * API Configuration
 * Project : ClassPilot
 * ==========================================
 */

import axios from "axios";

const api = axios.create({

    baseURL: import.meta.env.VITE_API_BASE_URL,

    timeout:10000,

    headers:{

        "Content-Type":"application/json",

    }

});


/*
=========================================
Request Interceptor
=========================================
*/

api.interceptors.request.use(

    (config)=>{

        const token=localStorage.getItem("token");

        if(token){

            config.headers.Authorization=`Bearer ${token}`;

        }

        return config;

    },

    (error)=>Promise.reject(error)

);


/*
=========================================
Response Interceptor
=========================================
*/

api.interceptors.response.use(

    (response)=>response,

    (error)=>{

        if(error.response?.status===401){

            console.log("Unauthorized");

        }

        if(error.response?.status===500){

            console.log("Server Error");

        }

        return Promise.reject(error);

    }

);

export default api;