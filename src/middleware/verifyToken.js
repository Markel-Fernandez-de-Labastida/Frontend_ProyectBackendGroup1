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

module.exports = {
  validateJWT,
};
