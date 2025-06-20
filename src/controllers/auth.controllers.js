const { consultFetch } = require("../utils/consultFetch");

const loginView = (req, res) => {
  res.render("auth/login", {
    errorMsg: "",
  });
};

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
    //console.log('ANSWER', answer)
    res.cookie("authToken", answer.token, {
      httpOnly: true, // la cookie solo es accesible en el servidor
      maxAge: 3600000, // expira en 1 hora
    });
    const role = answer.user.role_id;
    if (role === 1) {
      return res.redirect("/");
    } else if (role === 2) {
      return res.redirect("/");
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

const signupView = (req, res) => {
  res.render("auth/signup", {
    errorMsg: "",
  });
};

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
    //console.log('ANSWER', answer)
    res.cookie("authToken", answer.token, {
      httpOnly: true, // la cookie solo es accesible en el servidor
      maxAge: 3600000, // expira en 1 hora
    });
    res.redirect("/");
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
