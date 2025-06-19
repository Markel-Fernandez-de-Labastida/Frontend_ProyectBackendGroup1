const { consultFetch } = require('../utils/consultFetch')

const loginView = (req, res) => {
    res.render('auth/login', {
        errorMsg: ''
        })
}

const loginSend = async (req, res) => {
    const urlApiBase = process.env.URL_API_BASE;
    const { email, password } = req.body;

    try {
        const answer = await consultFetch(`${urlApiBase}/api/v1/auth/login`, 'POST',
            {
                email,
                password
            })
        console.log('ANSWER', answer)
        res.cookie('authToken', answer.token, {
            httpOnly: true, // la cookie solo es accesible en el servidor
            maxAge: 3600000 // expira en 1 hora
        });
        const role = answer.user.role_id;
        if (role === 1) {
            return res.redirect('/');
        } else if (role === 2) {
            return res.redirect('/');
        }
    } catch (error) {
        console.log('ERROR en LOGIN:', error)
        if (error.status === 401) {
            return res.render('auth/login', {
                errorMsg: error.msg,
            });
        } else if (error.status === 403) {
            return res.render('auth/login', {
                errorMsg: error.msg,
            });
        } else if (error.status === 400) {
            console.log('ERROR EN 400', error)
            return res.render('auth/login', {
                errorMsg: error.msg,
            });
        } else {
            console.log('ERROR EN eLSE', error)
            return res.render('auth/login', {
                errorMsg: error.msg,
            });
        }
    }
}


const signupView = (req, res) => {
    res.render('auth/signup')
}

const signupSend = async (req, res) => {
    const urlApiBase = process.env.URL_API_BASE;
    const { name, email, password } = req.body;
    try {
        const answer = await consultFetch(`${urlApiBase}/api/v1/auth/signup`, 'POST',
            {
                name,
                email,
                password
            })
        //console.log('ANSWER', answer)
        res.cookie('authToken', answer.token, {
            httpOnly: true, // la cookie solo es accesible en el servidor
            maxAge: 3600000 // expira en 1 hora
        });
        // res.send('Token almacenado en cookie')
        // console.log(answer.savedUser[0])
        const role = answer.savedUser[0].role_id;
        if (role === 1) {
            res.redirect('/');
        } else if (role === 2) {
            res.redirect('/');
        }
        // return res.status(200).json({
        //     ok: true,
        //     answer
        // })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Error en el registro'
        })
    }
}


const logOutUser = (req, res) => {
    res.clearCookie('authToken');
    return res.redirect('/');
}

module.exports = {
    loginView,
    loginSend,
    signupView,
    signupSend,
    logOutUser
}
