const { consultFetch } = require("../utils/consultFetch");

const dashboardView = (req, res) => {
  res.render('user/dashboard')
}

const addFavorite = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  try {
    const { id_user, id_movie } = req.body;

    const body = { id_user, id_movie };
    const response = await consultFetch(
      `${urlApiBase}/api/v1/users/addFavorite`,
      `POST`,
      id_user,
      id_movie
    );
  } catch (error) {
    return error;
  }
};

const getFavorite = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  try {
    //const body = { id_user, id_movie };
    const response = await consultFetch(
      `${urlApiBase}/api/v1/users/movies`,
      `GET`
    );
    if (!response) {
      res.status(404).json({
        ok: false,
        msg: "no se ha recibido nada",
      });
    } else {
      return response;
    }
  } catch (error) {
    return error;
  }
};

module.exports = {
  dashboardView,
  addFavorite,
  getFavorite,
};
