// src/api/axiosClient.js

import axios from 'axios';

// 🚨 1. BASE URL de tu backend de NestJS 🚨
const API_BASE_URL = import.meta.env.VITE_API_URL;

// Crear una instancia de Axios con la configuración base
const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// --- INTERCEPTOR DE SOLICITUD (REQUEST) ---
axiosClient.interceptors.request.use(
  (config) => {
    // 1. Obtener el token del almacenamiento local (donde lo guardamos al hacer login)
    const token = localStorage.getItem('accessToken'); 

    // 2. Si existe un token, adjuntarlo al encabezado 'Authorization'
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Estructura estándar "Bearer [token]"
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// --- INTERCEPTOR DE RESPUESTA ---
axiosClient.interceptors.response.use(
  (response) => {
    return response; // Respuesta exitosa: no hacemos nada
  },
  (error) => {
    // 🚨 Manejo de la expiración del Token (401 Unauthorized) 🚨
    if (error.response && error.response.status === 401) {
      console.error("Token expirado o no autorizado. Cerrando sesión...");
      
      // 1. Limpiar el token y cualquier dato de usuario
      localStorage.removeItem('accessToken');
      
      // 2. Redirigir al administrador a la página de login (ruta /admin/login)
      // Nota: Esto asume que tienes un router configurado para manejar la ruta
      window.location.href = '/admin/login'; 
    }
    return Promise.reject(error);
  }
);

export default axiosClient;