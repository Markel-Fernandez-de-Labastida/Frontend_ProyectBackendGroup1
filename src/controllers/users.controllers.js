const { consultFetch } = require("../utils/consultFetch");

/**
 * Función para renderizar el panel de control del usuario.
 * @param {Object} req Requerimiento
 * @param {Object} res Respuesta
 */
const dashboardView = (req, res) => {
  res.render('user/dashboard');
}

/**
 * Función para renderizar la vista del buscador de películas
 * @param {Object} req Requerimiento
 * @param {Object} res Respuesta
 */
const searchView = (req, res) => {
  res.render('user/search', {
    movies: [],
    errorMsg: ''
  });
}

/**
 * Función para renderizar los detalles de la película
 * @param {Object} req Requerimiento
 * @param {Object} res Respuesta
 * @returns Renderiza la información de la película
 */
const movieDetailView = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  const { id } = req.params;
  const token = req.cookies.authToken;
  try {

    const response = await consultFetch(
      `${urlApiBase}/api/v1/movies/searchId`,
      'POST',
      {
        id_movie: id
      },
      {
        'Authorization': `Bearer ${token}`
      }
    );
    if (response.ok) {
      res.render('user/movieDetail', {
        movie: response.data,
        errorMsg: ''
      });
    }
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

/**
 * Función para obtener una o más película(s) según su título
 * @param {Object} req Requerimiento
 * @param {Object} res Respuesta
 * @returns Renderiza las películas encontradas
 */
const getMovieTitle = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  const { title } = req.body;
  const token = req.cookies.authToken;
  try {
    const response = await consultFetch(
      `${urlApiBase}/api/v1/movies/search`,
      'POST',
      {
        title
      },
      {
        'Authorization': `Bearer ${token}`
      }
    );
    if (!response.ok) {
      return res.render('user/search', {
        movies: [],
        errorMsg: 'No se encontraron películas.'
      });
    } else {
      return res.render('user/search', {
        movies: response.data,
        errorMsg: ''
      });
    }
  } catch (error) {
    console.error('Error Get movie title', error);
    return res.render('user/search', {
      movies: [],
      errorMsg: 'Error en la búsqueda'
    });
  }
};

/**
 * Función para añadir películas a favoritos
 * @param {Object} req Requerimiento
 * @param {Object} res Respuesta
 */
const addFavorite = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  const token = req.cookies.authToken;
  try {
    const { id_user, id_movie } = req.body;

    const response = await consultFetch(
      `${urlApiBase}/api/v1/users/addFavorite`,
      `POST`,
      {
        id_user,
        id_movie
      },
      {
        'Authorization': `Bearer ${token}`
      }
    );
    res.redirect('/user/search');
  } catch (error) {
    console.log(error);
    return error;
  }
};

/**
 * Función para obtener las películas favoritas del usuario
 * @param {Object} req Requerimiento
 * @param {Object} res Respuesta
 * @returns Devuelve un objeto con las películas
 */
const getFavorite = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  const token = req.cookies.authToken;
  try {
    const response = await consultFetch(
      `${urlApiBase}/api/v1/users/movies`,
      'GET',
      {},
      {
        'Authorization': `Bearer ${token}`
      }
    );
    if (response.ok) {
      res.render('user/moviesUser', {
        movies: response.data,
        errorMsg: ''
      });
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  dashboardView,
  searchView,
  movieDetailView,
  getMovieTitle,
  addFavorite,
  getFavorite,
};
