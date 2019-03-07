const express = require('express');
const router = express.Router();
const User = require('../../models/users');


router.get('/', (req, res, next) => {
    User.find({}).then(user => {
        res.json(user);
    }).catch(next);
});

router.get('/:id', (req, res) => {
    User.findById({_id: req.params.id}).then(user => {
        console.log('User found!');
        res.json(user);
    });
});

router.post('/', (req, res, next) => {
    User.create(req.body).then(user => {
        console.log('User created!');
        res.json(user);
    }).catch(next); 
});

router.delete('/:id', (req, res, next) => {
    User.findByIdAndDelete({_id: req.params.id}).then(user => {
        console.log('User deleted!');
        res.json(user);
    }).catch(next);
})

/* 

User.create(req.body, (err, user) => {
        if (err) console.log('yall');
        res.json({
            status: 'success',    
            user
        });
    }); 
    
*/

module.exports = router;