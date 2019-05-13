const express = require('express');
const router = express.Router();
const Movies = require('../models/movies');

router.get('/', (req, res, next) => {
    res.render('movie');
});

module.exports = router;