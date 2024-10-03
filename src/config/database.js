const mongoose = require('mongoose');

// URL de conexión a MongoDB (cámbiala si usas MongoDB Atlas o una configuración diferente)
const uri = 'mongodb://localhost:27017/MRProyecto'; 

// Conectarse a MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error al conectar con MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

module.exports = mongoose;
