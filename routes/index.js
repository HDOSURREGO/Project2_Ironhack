const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
// router.get('/', (req, res, next) => {
//   res.render('index');
// });

router.get('/', (req, res, next) => {
  Movie
  .find()
  .then((result)=>{
  res.render('movie-views/movies', {listOfMovies: result});
  })
  .catch((err)=>{
    next(err);
  })
});

module.exports = router;
