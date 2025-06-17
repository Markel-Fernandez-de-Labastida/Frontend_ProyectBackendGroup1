
const loginView = (req, res) => {
    res.render('auth/login')
    
    // return res.status(200).json({
    //     ok: true,
    //     msg: 'Entra en vista login'
    // })
}


const signupView = (req, res) => {
    return res.status(200).json({
    ok: true,
    msg: 'Entra en vista signup'
    })
}

module.exports = {
    loginView,
    signupView
}
