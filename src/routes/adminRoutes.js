const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth'); // Importa el middleware
const adminController = require('../controllers/adminController');

// Usamos los nombres de métodos que coincidan con el controlador
router.post('/conductores', adminController.crearConductor); // Llamando a crearConductor
router.put('/conductores/:id', adminController.actualizarConductor); // Vamos a ajustar este método en el controlador
router.delete('/conductores/:id', adminController.eliminarConductor); // Ajustamos este también
router.get('/conductores', adminController.obtenerConductores); // Para obtener todos los conductores

// ... similarmente para pasajeros, asignaciones, incidentes, etc.
router.get('/dashboard', adminController.obtenerDatosDashboard); // Cambiar a obtenerDatosDashboard para consistencia

// Ruta protegida para administradores
// Definir la ruta protegida
router.get('/ruta-protegida', authMiddleware, (req, res) => {
    res.json({
        message: 'Acceso a la ruta protegida exitoso',
        user: {
            email: req.user.email,
            role: req.user.role,
        },
    });
});

module.exports = router;
