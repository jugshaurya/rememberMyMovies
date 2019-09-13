const router = require('express').Router()
const fetch = require('node-fetch')

// this route is mounted over /movies route
router.get('/', (req, res) => {
  res.render('movie')
})

router.post('/', async (req, res) => {
  // Now gettign a movie detail from api req
  console.log(req.body)
  const movieName = req.body.movie
  const url = `https://api.themoviedb.org/3/search/movie/?api_key=${process.env.API_KEY}&query=${movieName}`
  const response = await fetch(url)
  const movie_list = await response.json()

  const movies = []
  movie_list.results.forEach(movie => {
    const data = {
      posterURL: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      backdropURL: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
      language: movie.original_language,
      title: movie.original_title,
      rating: movie.vote_average,
      overview: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      release_date: "2008-05-02",
      id: movie.id,
      genre_ids: movie.genre_ids
    }
    movies.push(data)
  });
  
  res.render('movie', { movies })
  
  // use page=pagenumber for pagination
  `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  `https://api.themoviedb.org/3/movie/${id}?api_key${API_KEY}&language=en-US`


  // TODO
  // 1. get the name of movie that user entered
  // 2. search in db if we have info about it in db 
  // if present in db , display that 
  // else 3. make an api request to get the movie info

  // and display that movie with add button over the movie card to add them to their watched movie list


})

router.get('/saved', (req, res) => {

  // show all the saved movies

})

module.exports = router