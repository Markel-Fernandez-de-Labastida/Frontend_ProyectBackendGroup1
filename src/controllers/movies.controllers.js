const { consultFetch } = require("../utils/consultFetch");

const createMovieView = (req, res) => {
    res.render('admin/createMovie')
}


const getAllMovies = async (req, res) => {
  //recoger token
  try {
    const response = await consultFetch(
      `http://localhost:3000/api/v1/movies/getAllMovies`,
      /* {
        id_movie,
      }, */
      {
        //  auten.......:token,
      }
    );
    console.log('RESPONSE:', response);
    if(response.ok) {
      res.render('admin/movies', {
        movies: response.data
      })
    }
  } catch (error) {
    console.log('Error en getAllMovies:', error);
    res.status(500).send('Error al obtener las películas');
  }
};

const getMovieId = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  const { id_movie } = req.body;

  //obtener el token
  try {
    const body = { id_movie };
    //${urlApiBase}/api/v1/movies/searchId
    const response = await consultFetch(
      `http://localhost:3000/api/v1/movies/searchId`,
      "POST",
      {
        id_movie,
      },
      {
        //  auten.......:token,
      }
    );
    console.log("getMovie: ", response);

    res.render("admin/movie", {
      ...response,
    });
    // res.redirect("/");
    return response;
  } catch (error) {
    return error;
  }
};

const getMovieTitle = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  const { title } = req.body;
  try {
    const body = { title };
    const response = await consultFetch(
      `${urlApiBase}/api/v1/movies/search`,
      `POST`,
      body
    );
    console.log("getMovie: ", getMovie);
    //return response;
  } catch (error) {
    return error;
  }
};

const addMovie = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  const {
    title,
    year_movie,
    director,
    genre_id,
    duration,
    synopsis,
    image_url,
  } = req.body;
  try {
    //const body = { title,  };
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
    }
    );
    //return response;
    res.redirect('/admin/createmovie');
  } catch (error) {
    console.log('ERROR ADDMOVIE:', error);
    if (error.status === 401) {
      return res.render("admin/createMovie", {
        errorMsg: error.msg,
      });
    } else if (error.status === 403) {
      return res.render("admin/createMovie", {
        errorMsg: error.msg,
      });
    } else if (error.status === 400) {
      return res.render("admin/createMovie", {
        errorMsg: error.msg,
      });
    } else {
      return res.render("admin/createMovie", {
        errorMsg: error.msg,
      });
    }
  }
};

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
  try {
    const body = { title };
    const response = await consultFetch(
      `${urlApiBase}/api/v1/movies/editMovie/${id_movie}`,
      `PUT`,
      title,
      year_movie,
      director,
      genre_id,
      duration,
      synopsis,
      image_url
    );
    console.log("updateMovie: ", response);
    //return response;
  } catch (error) {
    return error;
  }
};

const deleteMovie = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  const { id_movie } = req.body;
  try {
    const response = await consultFetch(
      `${urlApiBase}/api/v1/movies/removeMovie`,
      `DELETE`,
      id_movie
    );
    console.log("deleteMovie: ", response);
    //return response;
  } catch (error) {
    return error;
  }
};

const deleteFavorites = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  const { id_user, id_movie } = req.body;
  try {
    const response = await consultFetch(
      `${urlApiBase}/api/v1/movies/removeFavorites`,
      `DELETE`,
      id_user,
      id_movie
    );
    console.log("deleteFavorites: ", deleteFavorites);
    //return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createMovieView,
  getAllMovies,
  getMovieId,
  getMovieTitle,
  addMovie,
  updateMovie,
  deleteMovie,
  deleteFavorites,
};
