const { consultFetch } = require("../utils/consultFetch");

const createMovieView = (req, res) => {
    res.render('admin/createMovie')
}

const editMovieView = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  const {id} = req.params;
  try {
    const response = await consultFetch(`${urlApiBase}/api/v1/movies/searchId`,
      'POST',
      {
        id_movie: id
      }
    );
    if(response.ok) {
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


const getAllMovies = async (req, res) => {
  const urlApiBase = process.env.URL_API_BASE;
  //recoger token
  try {
    const response = await consultFetch(
      `${urlApiBase}/api/v1/movies/getAllMovies`,
      /* {
        id_movie,
      }, */
      {
        //  auten.......:token,
      }
    );
    if(response.ok) {
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
      'DELETE',
      {
        id: id_movie
      }
    );
    if (response.ok) {
      res.redirect('/admin/movies')
    }
  } catch (error) {
    console.log('ERROR REMOVE MOVIE:', error);
    return error
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
    //return response;
  } catch (error) {
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
