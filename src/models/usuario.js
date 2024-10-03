const mongoose = require('../config/database'); // Conexión a MongoDB
const { Schema } = mongoose;

// Definir el esquema para el usuario
const usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
  },
  fotoPerfil: {
    type: String,
  },
  // Puedes agregar más campos aquí
}, {
  timestamps: true // Agrega createdAt y updatedAt automáticamente
});

// Crear el modelo a partir del esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
