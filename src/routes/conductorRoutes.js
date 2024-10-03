const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth'); // Importa el middleware
const conductorController = require('../controllers/conductorController');

// Verifica que estás llamando a funciones correctamente definidas
router.get('/conductores', conductorController.getConductores); // Obtener todos los conductores
router.get('/conductores/:id', conductorController.getConductorById); // Obtener un conductor por ID
router.post('/conductores', conductorController.createConductor); // Crear un nuevo conductor
router.put('/conductores/:id', conductorController.updateConductor); // Actualizar un conductor
router.delete('/conductores/:id', conductorController.deleteConductor); // Eliminar un conductor


// Ruta protegida para conductores
router.get('/ruta-protegida', authMiddleware, (req, res) => {
    res.json({ message: "Acceso a la ruta protegida para conductores exitoso", user: req.user });
});


module.exports = router;
