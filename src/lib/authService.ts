import axiosClient from './axiosClient';

// 1. Definimos la interfaz para las credenciales, debe coincidir con LoginPage.tsx
export interface LoginCredentials {
  email: string;
  password: string;
}

// 2. Definimos la interfaz para la respuesta exitosa del backend
interface AuthResponse {
    accessToken: string;
    // Puedes añadir otros campos que devuelva tu backend (ej. nombre de usuario, id)
}

const authService = {
  /**
   * Llama a la ruta POST /auth/login en NestJS.
   * @param credentials - Objeto con email y password tipados.
   */
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
      // Axios ya está tipado, usamos destructuring para obtener los datos
      const response = await axiosClient.post<AuthResponse>('/auth/login', credentials);
      
      const { accessToken } = response.data;
      
      // Guardar el token en el almacenamiento local para el Interceptor
      localStorage.setItem('accessToken', accessToken);
      
      return response.data;
    } catch (error) {
      // 🚨 La clave: forzar el tipo de error para acceder a 'response.data'
      const axiosError = error as any; 
      
      // Lanzamos el error con los datos de la respuesta de NestJS (ej. { statusCode: 401, message: "Unauthorized" })
      throw axiosError.response.data; 
    }
  },

  /**
   * Cierra la sesión del administrador eliminando el token.
   */
  logout: (): void => {
    localStorage.removeItem('accessToken');
  },
};

export default authService;