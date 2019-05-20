const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create user schema & model
const movieSchema = new Schema({
    title:{
        type: String,
        required: [true, 'Title field is required']
    },
    description: String,
    genre: String,
    director: String,
    stars: [String],
    Year: Number,
    poster: String
});
const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;