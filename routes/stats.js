const express = require('express');
const router = express.Router();
const Movies = require('../models/movies');

router.get('/', (req, res, next) => {
    Movies.find({}).then(movie => {
        res.status(200).render('stats');
    }).catch(next);
});



module.exports = router;