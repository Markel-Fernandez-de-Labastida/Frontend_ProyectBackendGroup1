const { consultFetch } = require("../utils/consultFetch");

/**
 * Función para renderizar la vista del login
 * @param {Object} req Requerimiento
 * @param {Object} res Respuesta
 */
const loginView = (req, res) => {
  res.render("auth/login", {
    errorMsg: "",
  });
};

/**
 * Función para enviar los datos del formulario del login al backend
 * @param {Object} req Requerimiento
 * @param {Object} res Respuesta
 * @returns Almacena el token recibido en las cookies y renderiza una vista según el rol que tenga el usuario.
 */
const loginSend = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  const { email, password } = req.body;

  try {
    const answer = await consultFetch(
      `${urlApiBase}/api/v1/auth/login`,
      "POST",
      {
        email,
        password,
      }
    );
    res.cookie("authToken", answer.token, {
      maxAge: 3600000
    });
    const role = answer.user.role_id;
    if (role === 1) {
      return res.redirect("/admin/movies");
    } else if (role === 2) {
      return res.redirect("/user/dashboard");
    }
  } catch (error) {
    console.log(error);
    if (error.status === 401) {
      return res.render("auth/login", {
        errorMsg: error.msg,
      });
    } else if (error.status === 403) {
      return res.render("auth/login", {
        errorMsg: error.msg,
      });
    } else if (error.status === 400) {
      return res.render("auth/login", {
        errorMsg: error.msg,
      });
    } else {
      return res.render("auth/login", {
        errorMsg: error.msg,
      });
    }
  }
};

/**
 * Función para renderizar la vista de registro
 * @param {Object} req Requerimiento
 * @param {Object} res Respuesta
 */
const signupView = (req, res) => {
  res.render("auth/signup", {
    errorMsg: "",
  });
};

/**
 * Función para enviar los datos del formulario de registro al backend
 * @param {Object} req Requerimiento
 * @param {Object} res Respuesta
 * @returns Almacena el token en las cookies y redirige al panel de control del usuario
 */
const signupSend = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  const { name, email, password } = req.body;
  try {
    const answer = await consultFetch(
      `${urlApiBase}/api/v1/auth/signup`,
      "POST",
      {
        name,
        email,
        password,
      }
    );
    res.cookie("authToken", answer.token, {
      maxAge: 3600000
    });
    res.redirect("/user/dashboard");
  } catch (error) {
    console.log(error);
    if (error.status === 401) {
      return res.render("auth/signup", {
        errorMsg: error.msg,
      });
    } else if (error.status === 403) {
      return res.render("auth/login", {
        errorMsg: error.msg,
      });
    } else if (error.status === 400) {
      return res.render("auth/signup", {
        errorMsg: error.msg,
      });
    } else {
      return res.render("auth/signup", {
        errorMsg: error.msg,
      });
    }
  }
};

/**
 * Función para cerrar la sesión.
 * @param {Object} req Requerimiento
 * @param {Object} res Respuesta
 * @returns Elimina la cookie almacenada y redirige a la vista de login
 */
const logOutUser = (req, res) => {
  res.clearCookie("authToken");
  return res.redirect("/");
};

module.exports = {
  loginView,
  loginSend,
  signupView,
  signupSend,
  logOutUser,
};
