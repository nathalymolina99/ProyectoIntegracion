import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div style={styles.container}>
      <h1>Bienvenido a MRProyecto</h1>
      <Link to="/login">
        <button style={styles.button}>Ingresar</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
  },
};

export default Welcome;