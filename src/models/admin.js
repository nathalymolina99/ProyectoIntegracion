// models/admin.js
const Usuario = require('./usuario');

const Admin = Usuario.define('Admin', {
  // Atributos específicos del admin
  rol: {
    type: DataTypes.STRING,
    defaultValue: 'admin',
  },
});

Admin.belongsTo(Usuario); // Relacion 1:1 con Usuario

module.exports = Admin;