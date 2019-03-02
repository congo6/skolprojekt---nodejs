const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const users = require('./routes/api/users');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// connect to mongodb
mongoose.connect('mongodb://localhost/usergo', { useNewUrlParser: true }, err => {
    if (err) throw err;
    console.log('mongoose is running!');
});
mongoose.Promise = global.Promise;


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/api/users', users);

// error handling middleware
app.use((err, req, res, next) => {
    console.log('error: ', err.message);
    res.status(422).send({error: err.message});
})

app.get('/', (req, res) => res.render('index', {
    title: 'index',
    members: {
        name: 'James',
        age: '55'
    }
}));


app.use((req, res, next) => {
    res.send('404');
    next();
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));