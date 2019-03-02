const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const users = require('../../Members');
const User = require('../../models/users');


router.get('/', (req, res) => {
    res.json({
        status: 'success',
        users,
    });
});

router.get('/:id', (req, res) => {
    const found = users.find(user => user.id === parseInt(req.params.id));
    if (found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No user with the id of ${req.params.id}`});
    }
});

router.post('/', (req, res, next) => {
    User.create(req.body).then(user => {
        console.log('User created!');
        res.json(user);
    }).catch(next); 
});

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