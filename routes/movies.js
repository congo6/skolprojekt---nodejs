const express = require('express');
const router = express.Router();
const Movies = require('../models/movies');

router.get('/:id', (req, res, next) => {
    Movies.findById({_id: req.params.id}).then(movie => {
        let stars = movie.stars.join(", ")
        res.status(200).render('movie', {
            title: 'Movies',
            id: req.params.id,
            title: movie.title,
            description: movie.description,
            director: movie.director,
            stars: stars,
            poster: movie.poster,
            year: movie.Year,
            genre: movie.genre
        });
    }).catch(next);
});



module.exports = router;