// src/config/api.js
let API_URL;

if (__DEV__) {
  if (Platform.OS === 'android') {
    // Usando la IP local de tu máquina
    API_URL = 'http://192.168.x.x:3000/api';  // Cambia por la IP de tu máquina
  } else {
    API_URL = 'http://localhost:3000/api';
  }
} else {
  API_URL = 'https://tu-api-produccion.com/api';
}

export default API_URL;
