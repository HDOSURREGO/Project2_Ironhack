const express = require('express');
const router  = express.Router();

const Movie     = require('../models/Movie')

//This route gets triggered when pressing the Add Movie button 
//on view "movies"
router.get('/new-movie', (req, res, next) =>{
  res.render('movie-views/new-movie');
});

//This route shows the list of Movies in the MongoDB
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



//This route creates a new Movie in the MongoDB
//with the information entered in the form on the 
//"new-movie" view
router.post('/new-movie', (req, res, next) => {
  // console.log(req.body);
    Movie
    .create(req.body)
    .then(newMovie=> {
      res.render('movie-views/movie-saved');
      // console.log("NEW MOVIE: ", newMovie);
    })
    .catch(err => console.log("Error while creating a new movie: ", err));

  // console.log('The data from the form: ', req.body);
  // the "value" from option gets saved inside req.body object

});
module.exports = router;
