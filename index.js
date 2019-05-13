const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const users = require('./routes/api/users');
const stock = require('./routes/api/stock');
const movies = require('./routes/api/movies');
const moviesId = require('./routes/movies');


const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// connect to mongodb
mongoose.connect('mongodb://localhost/usergo', { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    console.log('mongoose is running!');
});
mongoose.Promise = global.Promise;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/api/users', users);
app.use('/api/stock', stock);
app.use('/api/movies', movies);
app.use('/movies', moviesId)


app.use((err, req, res, next) => {
    console.log('error:', err.message);
    res.status(400).send({error: err.message});
})

app.get('/', (req, res) => res.render('index', {
    title: 'index',
    members: {
        name: 'James',
        age: '55'
    }
}));


app.get('/test', (req, res) => res.render('test'));

app.use((req, res, next) => {
    res.status(404).send('404');
    next();
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));