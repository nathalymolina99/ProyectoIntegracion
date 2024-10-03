const mongoose = require('../config/database');
const Usuario = require('./usuario'); // Importa el modelo Usuario
const { Schema } = mongoose;

// Definir un esquema para los atributos específicos del pasajero
const pasajeroSchema = new Schema({
  metodoPagoPreferido: {
    type: String,
  },
  // Otros atributos específicos como historial de viajes, etc.
});

// Usa un "discriminator" para crear el modelo Pasajero basado en el esquema de Usuario
const Pasajero = Usuario.discriminator('Pasajero', pasajeroSchema);

module.exports = Pasajero;
