const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create user schema & model
const movieSchema = new Schema({
    title:{
        type: String,
        required: [true, 'Title field is required']
    },
    genre: [String],
    duration: Number,
    director: String,
    writers: [String],
    actors: [String]
    // add in geo location
});

const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;