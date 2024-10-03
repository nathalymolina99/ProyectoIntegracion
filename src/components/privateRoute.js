import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const PrivateRoute = ({ children, role }) => {
  const { auth } = useContext(AuthContext);
  
  if (!auth) {
    // Si no está autenticado, redirigir al login
    return <Navigate to="/login" />;
  }
  
  if (role && auth.role !== role) {
    // Si el rol no coincide, redirigir a la página de bienvenida o a otra página de acceso denegado
    return <Navigate to="/" />;
  }
  
  return children;
};

export default PrivateRoute;
