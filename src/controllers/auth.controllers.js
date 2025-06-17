
const loginView = (req, res) => {
    return res.status(200).json({
        ok: true,
        msg: 'Entra en vista login'
    })
}

module.exports = {
    loginView
}
