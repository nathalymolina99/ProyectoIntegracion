const mongoose = require('../config/database');
const Usuario = require('./usuario'); // Importa el modelo Usuario
const { Schema } = mongoose;

// Definir un esquema para los atributos específicos del conductor
const conductorSchema = new Schema({
  numeroLicencia: {
    type: String,
    required: true,
  },
  modeloVehiculo: {
    type: String,
    required: true,
  },
  placaVehiculo: {
    type: String,
    required: true,
  },
  disponible: {
    type: Boolean,
    defaultValue: false,
  },
  // Otros atributos como calificación, etc.
});

// Usa un "discriminator" para crear el modelo Conductor basado en el esquema de Usuario
const Conductor = Usuario.discriminator('Conductor', conductorSchema);

module.exports = Conductor;
