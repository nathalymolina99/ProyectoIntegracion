import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setCredentials({ 
      ...credentials, 
      [e.target.name]: e.target.value 
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', credentials);
      setAuth(response.data);
      
      // Redireccionar según el rol
      if(response.data.role === 'admin') {
        navigate('/admin');
      } else if(response.data.role === 'conductor') {
        navigate('/conductor');
      } else if(response.data.role === 'pasajero') {
        navigate('/pasajero');
      }
      
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Credenciales incorrectas');
    }
  };
  
  return (
    <div style={styles.container}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input 
          type="email" 
          name="email" 
          placeholder="Correo electrónico" 
          value={credentials.email} 
          onChange={handleChange}
          required 
          style={styles.input}
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Contraseña" 
          value={credentials.password} 
          onChange={handleChange}
          required 
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Ingresar</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
    margin: '100px auto',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
  },
};

export default Login;
