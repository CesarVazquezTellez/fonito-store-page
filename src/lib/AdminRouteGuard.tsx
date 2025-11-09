import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// El tipo 'Children' se usa cuando el componente es un envoltorio
interface AdminRouteGuardProps {
    children?: React.ReactNode; 
}

// Este componente verifica si el token existe en localStorage.
// Si no existe, redirige al login.
const AdminRouteGuard: React.FC<AdminRouteGuardProps> = ({ children }) => {
  
  // 🚨 La verificación de seguridad. Comprueba la existencia del token.
  const isAuthenticated = !!localStorage.getItem('accessToken'); 

  if (!isAuthenticated) {
    // Si no hay token, redirigir a la página de login
    return <Navigate to="/admin/login" replace />;
  }

  // Si hay token, renderizar los componentes internos de la ruta
  return children ? <>{children}</> : <Outlet />;
};

export default AdminRouteGuard;
