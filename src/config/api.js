// src/config/api.js

let API_URL;

if (__DEV__) {
  // Ambiente de desarrollo
  API_URL = 'http://localhost:3000/api';  // Para React web
  // API_URL = 'http://10.0.2.2:3000/api';  // Para React Native (Android emulator)
} else {
  // Ambiente de producción
  API_URL = 'https://tu-api-produccion.com/api';
}

export default API_URL;