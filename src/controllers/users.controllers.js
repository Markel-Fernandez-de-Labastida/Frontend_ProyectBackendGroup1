const { consultFetch } = require("../utils/consultFetch");

const dashboardView = (req, res) => {
  res.render('user/dashboard');
}

const searchView = (req, res) => {
  res.render('user/search', {
    movies: [],
    errorMsg: ''
  });
}

const movieDetailView = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  const { id } = req.params;

  //obtener el token
  try {
    const response = await consultFetch(
      `${urlApiBase}/api/v1/movies/searchId`,
      'POST',
      {
        id_movie: id
      },
      {
        //  auten.......:token,
      }
    );
    console.log('RESPONSE BY ID:', response)
    if (response.ok) {
      res.render('user/movieDetail', {
        movie: response.data,
        errorMsg: ''
      });
    }
    return response;
  } catch (error) {
    return error;
  }
};

const getMovieTitle = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  const { title } = req.body;
  try {
    const response = await consultFetch(
      `${urlApiBase}/api/v1/movies/search`,
      'POST',
      {
        title
      }
    );
    console.log('RESPONSE GET MOVIE TITLE:', response)
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
    //return response;
  } catch (error) {
    console.error('Error Get movie title', error);
    return res.render('user/search', {
      movies: [],
      errorMsg: 'Error en la búsqueda'
    });
  }
};

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
  searchView,
  movieDetailView,
  getMovieTitle,
  addFavorite,
  getFavorite,
};
