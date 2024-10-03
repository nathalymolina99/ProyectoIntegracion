import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    // Obtener el estado de autenticación del localStorage si existe
    const savedAuth = localStorage.getItem('auth');
    return savedAuth ? JSON.parse(savedAuth) : null;
  });

  useEffect(() => {
    // Guardar el estado de autenticación en localStorage
    if (auth) {
      localStorage.setItem('auth', JSON.stringify(auth));
    } else {
      localStorage.removeItem('auth');
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
