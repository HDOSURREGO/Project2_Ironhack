const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/', (req, res, next) => {
  Movie
  .find()
  .then((result)=>{
  res.render('index', {listOfMovies: result});
  })
  
  console.log(result)
 
  .catch((err)=>{
    next(err);
  })
});

module.exports = router;
