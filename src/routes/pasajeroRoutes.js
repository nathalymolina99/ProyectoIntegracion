const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth'); // Importa el middleware
const pasajeroController = require('../controllers/pasajeroController');

// Asegúrate de que las funciones que estás usando están bien definidas en el controlador
router.get('/info', pasajeroController.getConductorInfo); // Obtener información del conductor
router.put('/profile', pasajeroController.updateProfile); // Actualizar perfil del pasajero
router.get('/', pasajeroController.getPasajeros); // Obtener todos los pasajeros
router.post('/', pasajeroController.createPasajero); // Crear un nuevo pasajero
// Agrega las otras rutas que necesites aquí


// Ruta protegida para pasajeros
router.get('/ruta-protegida', authMiddleware, (req, res) => {
    res.json({ message: "Acceso a la ruta protegida para pasajeros exitoso", user: req.user });
});


module.exports = router;
