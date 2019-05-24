const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const users = require('./routes/api/users');
const movies = require('./routes/api/movies');
const moviesId = require('./routes/movies');
const stats = require('./routes/stats');


const mongoose = require('mongoose');

const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/usergo', { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    console.log('mongoose is running!');
});
mongoose.Promise = global.Promise;

app.engine('handlebars', exphbs({defaultLayout: 'main'})); // Handlebars funkar som en mall för HTML
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({extended: false})); // Denna behövs för "bodyparsing", alltså för att behandla data som skickats från t.ex. POST formulär


// De olika sökvägarna
app.use('/api/users', users);
app.use('/api/movies', movies);
app.use('/movies', moviesId);
app.use('/stats', stats);


app.use((err, req, res, next) => {
    console.log('error:', err.message);
    res.status(400).send({error: err.message});
})

// Skapar 2 routes
app.get('/', (req, res) => res.render('index', { title: 'index' }));
app.get('/users', (req, res) => res.render('users'));

app.use((req, res, next) => { // Om länkarna inte finns, skicka 404 
    res.status(404).send('404');
    next();
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));