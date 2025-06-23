const verifyRole = (requiredRole) => {
    return (req, res, next) => {
console.log('REQ USER:', req.user)
        if (!req.user || !req.user.role) {
            return res.status(403).json({
                message: 'Información de usuario no disponible'
            });
        }
        if (req.user.role !== requiredRole) {
            return res.status(403).json({
                message: 'Acceso no autorizado para este rol'
            });
        }
        next();
    };
};

module.exports = {
    verifyRole
};