const express = require('express');
const router = express.Router();
const Movies = require('../../models/movies');

router.get('/', (req, res, next) => {
    Movies.find({}).then(movies => {
      res.json(movies);
    }).catch(next);
});

router.get('/:id', (req, res, next) => {
    Movies.findById({_id: req.params.id}).then(movie => {
        console.log('movie found');
        res.json(movie);
    }).catch(next);
});

router.post('/', (req, res, next) => {
    Movies.create(req.body).then(movie => {
        console.log('movie created');
        res.json(movie);
    }).catch(next); 
});

router.delete('/:id', (req, res, next) => {
    Movies.findByIdAndDelete({_id: req.params.id}).then(movie => {
        console.log('movie deleted');
        res.json(movie);
    }).catch(next);
});

router.patch('/:id', (req, res, next) => {
    Movies.findByIdAndUpdate({_id: req.params.id}, {$set:req.body}).then(movie => {
        console.log('movie updated');
        res.json(movie);
    }).catch(next);
});

module.exports = router;