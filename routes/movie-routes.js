const express = require('express');
const router  = express.Router();

const Movie     = require('../models/Movie')

router.get('/', (req, res, next) => res.send("Hello there mano!"));

router.get('/', (req, res, next) => {
    Movie.find()
    .then((result)=>{
   
      res.render('movie-views/movies', {listOfMovies: result});
    })
    .catch((err)=>{
      next(err);
    })
  });

  router.post('/new', (req, res, next)=>{

    console.log('=-=-=-=-=-=-=-=-=-')
    console.log(req.body)

    let title = req.body.title;
    let director = req.body.director;
    let cast = req.body.cast

    let image = '/images/blah.png';
    if(req.file){
      image =  req.file.url;
    }
  
  
      Movie.create({
      title, director, image, cast
      })
      .then((result)=>{
  
        req.flash('success','New Movie successfully addded to Database')
  
        res.redirect('/movies')
        //res redirect take a url as the argument
  
      })
      .catch((err)=>{
        next(err)
      })
  })

module.exports = router;
