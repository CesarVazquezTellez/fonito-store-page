import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Shield, Apple, Loader2 } from "lucide-react"; // Añadimos Loader2 para el estado de carga
import authService from '../../lib/authService'; // 🚨 RUTA ACTUALIZADA según tu estructura
import logo from "@/assets/g5-75.png"

// Definimos la interfaz para el estado del formulario, usando TypeScript
interface LoginCredentials {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [credentials, setCredentials] = useState<LoginCredentials>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    // Limpiar el error cuando el usuario comienza a escribir
    if (error) setError(null); 
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // 🚨 1. Llamada al servicio de login que guarda el token en localStorage 🚨
      await authService.login(credentials); 
      
      // 2. Si es exitoso, navegar al dashboard de administración
      navigate('/admin', { replace: true }); 
      
    } catch (err: any) {
      // 3. Manejo de errores de la API (generalmente un 401 Unauthorized)
      console.error("Error de login:", err);
      
      let errorMessage = 'Error de conexión. Inténtalo de nuevo.';
      if (err.statusCode === 401) {
        errorMessage = 'Credenciales inválidas. Verifica tu email y contraseña.';
      } else if (err.message) {
        errorMessage = err.message;
      }

      setError(errorMessage);
      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Decorative coral circles (tu diseño existente) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#FF6B6B] to-[#FF5252] rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#FF6B6B] to-[#FF5252] rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#FF6B6B] to-[#FF5252] rounded-full blur-3xl opacity-50 translate-y-1/3 translate-x-1/4" />

      <header className="absolute top-0 left-0 p-8">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-light">Fon<span className="bg-gradient-primary bg-clip-text text-transparent">
            i
            </span>toStore</span>
            <img 
              src={logo} 
              alt="Logo FonitoStore" 
              className="w-4 h-6 object-contain" 
            />
        </div>
      </header>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 p-4 rounded-full border-4 border-white/30">
            <Shield className="w-16 h-16 text-white" strokeWidth={2} />
          </div>
          <h2 className="text-white text-5xl font-bold mb-4 text-center">Acceder al sistema</h2>
          <p className="text-gray-400 text-lg mb-12 text-center">Bienvenido de nuevo, por favor inicia sesión</p>

          {/* MENSAJE DE ERROR */}
          {error && (
            <div className="w-full mb-6 p-4 rounded-xl bg-red-800/20 border border-red-500/50 text-red-300">
              <p className="font-medium text-sm text-center">{error}</p>
            </div>
          )}

          {/* FORMULARIO ADAPTADO */}
          <form className="w-full space-y-6" onSubmit={handleSubmit}>
            
            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-white text-lg font-medium mb-3">
                Correo electrónico
              </label>
              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 z-10">
                  <Mail className="w-6 h-6 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email" // 🚨 Importante: Añadir el atributo name
                  type="email"
                  placeholder="tu@email.com"
                  value={credentials.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                  className="w-full pl-16 pr-6 py-5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                />
              </div>
            </div>

            {/* Password field */}
            <div>
              <label htmlFor="password" className="block text-white text-lg font-medium mb-3">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 z-10">
                  <Lock className="w-6 h-6 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password" // 🚨 Importante: Añadir el atributo name
                  type="password"
                  placeholder="••••••••••••"
                  value={credentials.password}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                  className="w-full pl-16 pr-6 py-5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                />
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full mt-8 py-5 rounded-full text-white text-xl font-semibold transition-all duration-300 
                ${isLoading 
                  ? 'bg-gray-500 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-[#ec2e2e] to-[#ff9797] hover:shadow-lg hover:shadow-[#FF6B6B]/50 hover:scale-[1.02]'
                }`}
            >
              {isLoading ? (
                <div className='flex items-center justify-center gap-3'>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Autenticando...
                </div>
              ) : (
                'Iniciar Sesión'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}