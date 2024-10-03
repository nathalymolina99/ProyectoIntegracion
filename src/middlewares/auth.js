const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Obtener el token del encabezado

  if (!token) {
    return res.status(403).json({ message: 'Token requerido' });
  }

  jwt.verify(token, 'secretkey', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    req.user = decoded; // Almacenar información del usuario en la solicitud
    next(); // Continuar a la siguiente middleware/ruta
  });
};

module.exports = authMiddleware;
