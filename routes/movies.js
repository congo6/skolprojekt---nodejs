const express = require('express');
const router = express.Router();
const Movies = require('../models/movies');

router.get('/:id', (req, res, next) => {
    Movies.findById({_id: req.params.id}).then(movie => {
        res.status(200).render('movie', {
            title: 'Movies',
            id: req.params.id
        });
    }).catch(next);
});



module.exports = router;