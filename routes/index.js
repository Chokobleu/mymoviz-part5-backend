var express = require('express');
var router = express.Router();



router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.OWM_API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      .then(response => response.json())
      .then(movies => {
        res.json({ movies: movies.results });
      });
   });


module.exports = router;
