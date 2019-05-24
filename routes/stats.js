const express = require('express');
const router = express.Router();
const Movies = require('../models/movies');

router.get('/actors', (req, res, next) => {
    res.status(200).render('actors');
});

router.get('/genre', (req, res, next) => {
    res.status(200).render('genre');
});

router.get('/years', (req, res, next) => {
    res.status(200).render('years');
});

module.exports = router;