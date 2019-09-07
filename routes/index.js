const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')


router.get('/', (req, res, next) => {
  Movie
  .find()
  .then((result)=>{
  res.render('index', {listOfMovies: result.reverse()});
  })
  .catch((err)=>{
    next(err);
  })
});

module.exports = router;
