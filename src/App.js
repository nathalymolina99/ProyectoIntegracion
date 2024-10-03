import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/welcome';
import Login from './components/login';
import AdminDashboard from './components/adminDashboard';
import ConductorDashboard from './components/conductorDashboard';
import PasajeroDashboard from './components/pasajeroDashboard';
import { AuthProvider } from './context/authContext';
import PrivateRoute from './components/privateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          
          {/* Rutas protegidas */}
          <Route 
            path="/admin" 
            element={
              <PrivateRoute role="admin">
                <AdminDashboard />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/conductor" 
            element={
              <PrivateRoute role="conductor">
                <ConductorDashboard />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/pasajero" 
            element={
              <PrivateRoute role="pasajero">
                <PasajeroDashboard />
              </PrivateRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;