const express = require('express');
const router = express.Router();
const Stock = require('../../models/stock');

router.get('/', (req, res, next) => {
    Stock.find({}).then(stock => {
      res.json(stock);
    }).catch(next);
});

router.get('/:id', (req, res, next) => {
    Stock.findById({_id: req.params.id}).then(stock => {
        console.log('stock found');
        res.json(stock);
    }).catch(next);
});

router.post('/', (req, res, next) => {
    Stock.create(req.body).then(stock => {
        console.log('stock created');
        res.json(stock);
    }).catch(next); 
});

router.delete('/:id', (req, res, next) => {
    Stock.findByIdAndDelete({_id: req.params.id}).then(stock => {
        console.log('stock deleted');
        res.json();
    }).catch(next);
});

router.patch('/:id', (req, res, next) => {
    Stock.findByIdAndUpdate({_id: req.params.id}, {$set:req.body}).then(stock => {
        console.log('stock updated');
        res.json(stock);
    }).catch(next);
});
/* 

.create(req.body, (err, ) => {
        if (err) console.log(err);
        res.json({
            status: 'success',    
            
        });
    }); 
    
*/

module.exports = router;