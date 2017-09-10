const express = require('express');
const app = express();
const mongoose = require('mongoose');
const apiEndpoint = require('./config.js');

var musicSchema = mongoose.Schema({
    song: String
});

var Music = mongoose.model('Music', musicSchema);

mongoose.connect(apiEndpoint);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connection');
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.get('/', function(req, res) {});

app.get('/music', function(req, res) {
    Music.find(function(err, songs) {
        res.json(songs);
    });
});

app.listen(4000, function() {
    console.log('Example app listening on port 4000!');
});
