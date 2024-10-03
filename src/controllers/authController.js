const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');



// Simulación de una base de datos de usuarios
const users = [
  { email: 'admin@example.com', password: 'admin123', role: 'admin' }, // password is "admin123"
  { email: 'conductor@example.com', password: 'conductor123', role: 'conductor' }, // password is "conductor123"
  { email: 'pasajero@example.com', password: 'pasajero123', role: 'pasajero' }, // password is "pasajero123"
];

const login = async (req, res) => {
  const { email, password } = req.body;

  // Buscar el usuario en la "base de datos"
  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  // Comparar la contraseña
  if (user.password !== password) {
    return res.status(400).json({ message: 'Credenciales incorrectas' });
  }

  // Generar el token JWT
  const token = jwt.sign({ email: user.email, role: user.role }, 'secretkey', { expiresIn: '1h' });

  // Responder con el token, email y rol del usuario
  res.json({
    token,
    email: user.email,
    role: user.role,
  });
};

module.exports = { login };
