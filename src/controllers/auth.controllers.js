const { consultFetch } = require('../utils/consultFetch')

const loginView = (req, res) => {
    res.render('auth/login')

    // return res.status(200).json({
    //     ok: true,
    //     msg: 'Entra en vista login'
    // })
}

const loginSend = async (req, res) => {
    const { email, password } = req.body;
    try {
        const answer = await consultFetch('http://localhost:3000/api/v1/auth/login', 'POST',
            {
                email,
                password
            })
        res.cookie('authToken', answer.token, {
            httpOnly: true, // la cookie solo es accesible en el servidor
            maxAge: 3600000 // expira en 1 hora
        });
        res.send('Token almacenado en cookie')
        return res.status(200).json({
            ok: true,
            answer
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Error en el login'
        })
    }

    // return res.status(200).json({
    //     ok: true,
    //     msg: 'Entra en vista loginSend'
    // })
}


const signupView = (req, res) => {
    res.render('auth/signup')
    // return res.status(200).json({
    // ok: true,
    // msg: 'Entra en vista signup'
    // })
}

module.exports = {
    loginView,
    loginSend,
    signupView
}
