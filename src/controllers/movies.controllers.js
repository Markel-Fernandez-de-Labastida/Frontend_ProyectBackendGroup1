const { consultFetch } = require("../utils/consultFetch");

/**
 * Función que renderiza la vista de crear película
 * @param {Object} req Requerimiento
 * @param {Object} res Respuesta
 */
const createMovieView = (req, res) => {
  res.render('admin/createMovie')
}

/**
 * Función que renderiza la vista de editar película según su id.
 * @param {Object} req Requerimiento
 * @param {Object} res Respuesta
 * @returns Renderiza la vista de editar película con los campos autorellenados
 */
const editMovieView = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  const { id } = req.params;
  const token = req.cookies.authToken;
  try {
    const response = await consultFetch(`${urlApiBase}/api/v1/movies/searchId`,
      'POST',
      {
        id_movie: id
      },
      {
        'Authorization': `Bearer ${token}`
      }
    );
    if (response.ok) {
      res.render('admin/editMovie', {
        movie: response.data,
      })
    }
  } catch (error) {
    console.log(error);
    return res.render("admin/editMovie", {
      errorMsg: error.msg,
    });
  }
}

/**
 * Función para obtener todas las películas almacenadas
 * @param {Object} req Requerimiento
 * @param {Object} res Respuesta
 * @returns Renderiza la vista del administrador para gestionar películas
 */
const getAllMovies = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  const token = req.cookies.authToken;
  try {
    const response = await consultFetch(
      `${urlApiBase}/api/v1/movies/getAllMovies`,
      {},
      {
        "Authorization": `Bearer ${token}`
      }
    );
    if (response.ok) {
      res.render('admin/movies', {
        movies: response.data
      })
    }
  } catch (error) {
    console.log('Error en getAllMovies:', error);
    return res.render("admin/movies", {
      errorMsg: error.msg,
    });
  }
};



/**
 * Función para añadir una película
 * @param {Object} req Requerimiento
 * @param {Object} res Respuesta
 * @returns Crea una película nueva y redirige al formulario para crear otra película
 */
const addMovie = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  // console.log(req.body)
  const {
    title,
    year_movie,
    director,
    genre_id,
    duration,
    synopsis,
    image_url,
  } = req.body;
  const token = req.cookies.authToken;
  try {

    const response = await consultFetch(
      `${urlApiBase}/api/v1/movies/createMovie`,
      'POST',
      {
        title,
        year_movie,
        director,
        genre_id,
        duration,
        synopsis,
        image_url
      },
      {
        'Authorization': `Bearer ${token}`
      }
    );
    res.redirect('/admin/movies');
  } catch (error) {
    console.log(error);
    if (error.status === 401) {
      return res.render("admin/createMovie", {
        errorMsg: error.msg,
      });
    } else if (error.status === 403) {
      res.render("admin/createMovie", {
        errorMsg: error.msg,
      });
    } else if (error.status === 400) {
      res.render("admin/createMovie", {
        errorMsg: error.msg,
      });
    } else {
      res.render("admin/createMovie", {
        errorMsg: error.msg,
      });
    }
  }
};

/**
 * Función para actualizar una película
 * @param {Object} req Requerimiento
 * @param {Object} res Respuesta
 * @returns Edita una película según su id
 */
const updateMovie = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  const { id_movie } = req.param;
  const {
    title,
    year_movie,
    director,
    genre_id,
    duration,
    synopsis,
    image_url,
  } = req.body;
  const token = req.cookies.authToken;
  try {
    const response = await consultFetch(
      `${urlApiBase}/api/v1/movies/editMovie/${id_movie}`,
      'PUT',
      {
        title,
        year_movie,
        director,
        genre_id,
        duration,
        synopsis,
        image_url
      },
      {
        'Authorization': `Bearer ${token}`
      }
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};

/**
 * Función que envía los datos para eliminar una película 
 * @param {Object} req Requerimiento
 * @param {Object} res Respuesta
 * @returns Elimina una película según su id
 */
const deleteMovie = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  const { id_movie } = req.body;
  const token = req.cookies.authToken;
  try {
    const response = await consultFetch(
      `${urlApiBase}/api/v1/movies/removeMovie`,
      'DELETE',
      {
        id: id_movie
      },
      {
        'Authorization': `Bearer ${token}`
      }
    );
    if (response.ok) {
      res.redirect('/admin/movies')
    }
  } catch (error) {
    console.log(error);
    //sreturn error
  }
};

/**
 * Función que envía los datos para eliminar una película de favoritos
 * @param {Object} req Requerimiento
 * @param {Object} res Respuesta
 * @returns Elimina una película de favoritos
 */
const deleteFavorites = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  const { id_user, id_movie } = req.body;
  const token = req.cookies.authToken;
  try {
    const response = await consultFetch(
      `${urlApiBase}/api/v1/movies/removeFavorites`,
      `DELETE`,
      {
        id_user,
        id_movie
      },
      {
        'Authorization': `Bearer ${token}`
      }
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  createMovieView,
  editMovieView,
  getAllMovies,
  addMovie,
  updateMovie,
  deleteMovie,
  deleteFavorites,
};
