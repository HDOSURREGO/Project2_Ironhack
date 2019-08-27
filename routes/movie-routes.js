const express = require('express');
const router  = express.Router();

const Movie     = require('../models/Movie')




router.get('/', (req, res, next) => {
    Movie.find()
    .then((result)=>{
   
      res.render('movie-views/movies', {listOfMovies: result});
    })
    .catch((err)=>{
      next(err);
    })
  });

  router.get('/details/:idVariable', (req, res, next)=>{
    const theID = req.params.idVariable;
    
    Movie.findById(theID).populate('cast')
    .then((result)=>{
      res.render('movie-views/details', {theSingleMovie: result})
    })
    .catch((err)=>{
      next(err)
    })
    });
    
    
    router.get('/create', (req, res, next)=>{
  
      Celebrity.find()
      .then((result)=>{
  
        res.render('movie-views/new', {allCelebs: result})
      })
      .catch((err)=>{
        next(err);
      })
    });
  