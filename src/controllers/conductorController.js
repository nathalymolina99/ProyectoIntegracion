const Conductor = require('../models/conductor');

// Obtener todos los conductores
exports.getConductores = async (req, res) => {
  try {
    const conductores = await Conductor.find();
    res.json(conductores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un conductor por ID
exports.getConductorById = async (req, res) => {
  try {
    const conductor = await Conductor.findById(req.params.id);
    if (!conductor) {
      return res.status(404).json({ message: 'Conductor no encontrado' });
    }
    res.json(conductor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo conductor
exports.createConductor = async (req, res) => {
  try {
    const conductor = new Conductor(req.body);
    await conductor.save();
    res.status(201).json(conductor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar un conductor
exports.updateConductor = async (req, res) => {
  try {
    const conductor = await Conductor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!conductor) {
      return res.status(404).json({ message: 'Conductor no encontrado' });
    }
    res.json(conductor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un conductor
exports.deleteConductor = async (req, res) => {
  try {
    const conductor = await Conductor.findByIdAndDelete(req.params.id);
    if (!conductor) {
      return res.status(404).json({ message: 'Conductor no encontrado' });
    }
    res.json({ message: 'Conductor eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
