import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const AdminDashboard = () => {
  const { auth, setAuth } = useContext(AuthContext);
  
  const handleLogout = () => {
    setAuth(null);
  };
  
  return (
    <div style={styles.container}>
      <h1>Dashboard de Administrador</h1>
      <p>Bienvenido, {auth?.email}</p>
      <button onClick={handleLogout} style={styles.button}>Cerrar Sesión</button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
  },
};

export default AdminDashboard;
