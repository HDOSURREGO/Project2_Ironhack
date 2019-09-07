const express = require('express');
const router  = express.Router();

const Movie     = require('../models/Movie')
const upload = require('../config/cloud.js');


//This route gets triggered when pressing the Upload a Movie button 
//on the nav bar
router.get('/new-movie', (req, res, next) =>{
  res.render('movie-views/new-movie');
});

//This route creates a new Movie in the MongoDB
//with the information entered in the form on the 
//"new-movie" view
router.post('/new-movie', upload.single('poster-file'),  (req, res, next) => {
  let newMovie = req.body;
  newMovie.image = 'images/avatar_flixtino.jpg';
  if(req.file){
    newMovie.image = req.file.url;
  }
    Movie
    .create(newMovie)
    .then(newMovie=> {
      res.render('movie-views/movie-saved');
    })
    .catch(err => console.log("Error while creating a new movie: ", err));

  // console.log('The data from the form: ', req.body);
  // the "value" from option gets saved inside req.body object

});
module.exports = router;
