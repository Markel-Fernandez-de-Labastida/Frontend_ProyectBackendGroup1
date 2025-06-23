const jwt = require('jsonwebtoken');

/**
 * Función para verificar si el usuario tiene un token de sesión almacenado en las cookies
 * @param {Object} req Requerimiento.
 * @param {Object} res Respuesta.
 * @param {Function} next Ejecuta la siguiente función
 * @returns Si el usuario tiene token, se ejecuta la siguiente función
 */
const validateJWT = (req, res, next) => {

    const token = req.cookies.authToken;
    if (!token) {
        return res.redirect('/');
    }
    next();
}

/* const validateJWT = (req, res, next) => {
    const header = req.header('Authorization');
    if (!header) {
        return res.status(401).json({
            msg: 'No hay informacion de autenticación'
        })
    }
    const parts = header.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({
            msg: 'Formato de token invalido'
        })
    }
    const token = parts[1];
    try {
        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) {
                return res.status(403).json({ msg: 'Token no válido' });
            }
            req.user = decoded;
            next();
        })
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: "El token no es válido."
        })
    }

} */

module.exports = {
  validateJWT,
};
