const Conductor = require('../models/conductor');
const Pasajero = require('../models/pasajero');

// Crear un nuevo conductor
exports.crearConductor = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    const nuevoConductor = new Conductor({ nombre, email, password });
    await nuevoConductor.save();
    res.status(201).json(nuevoConductor);
  } catch (err) {
    res.status(500).json({ message: 'Error al crear el conductor' });
  }
};

// Obtener todos los conductores
exports.obtenerConductores = async (req, res) => {
  try {
    const conductores = await Conductor.find(); // Para MongoDB, usa find()
    res.json(conductores);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener los conductores' });
  }
};

// Actualizar un conductor
exports.actualizarConductor = async (req, res) => {
  try {
    const conductor = await Conductor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(conductor);
  } catch (err) {
    res.status(500).json({ message: 'Error al actualizar el conductor' });
  }
};

// Eliminar un conductor
exports.eliminarConductor = async (req, res) => {
  try {
    await Conductor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Conductor eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar el conductor' });
  }
};

// Obtener datos del dashboard
exports.obtenerDatosDashboard = async (req, res) => {
  // Aquí iría la lógica para recopilar datos del dashboard
  res.json({ message: 'Datos del dashboard obtenidos correctamente' });
};
