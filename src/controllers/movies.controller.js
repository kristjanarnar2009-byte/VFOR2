const movieService = require('../lib/movieService');

async function index (req, res) {
  const movies = await movieService.getMovies();
  res.render('index', { title: 'Kill for Humanity', movies });
}

async function movie(req, res) {
  const id = req.params;
  const movie = await movieService.getMovieById(id);
  console.log('Beðið um ID:', id);
  console.log('Fannst mynd:', movie);
  if (!movie) {
    return res.status(404).render('404', { title: 'Síða fannst ekki' });
  }

  res.render('movie-details', { title: movie.title, movie });
}

module.exports = {
    index,
    movie,
};