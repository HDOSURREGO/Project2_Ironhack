const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    genre: String,
    duration: String,
    description: String,
    year: String,
    language: String,
    rating: String,
    image: String,
    movieFile: String,
    cast: [{
      fullName:String,
      role: String,
      Bio: String
      }]
})



const movieModel = mongoose.model('Movie', movieSchema)



module.exports = movieModel;