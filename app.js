const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const Movie = require('./movies')
const dbUrlAtlas = "mongodb+srv://vikas1293:vikas1293@cluster0.modfvmj.mongodb.net/?retryWrites=true&w=majority"
const port = process.env.PORT || 5000
const Series = require('./series')
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(dbUrlAtlas);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', async (req, res) => {
    const movies = await Movie.find({});
    res.json(movies)
})

app.get('/series/', async (req, res) => {
    const series = await Series.find({})
    res.json(series)
})

connectDB().then(() => {
    app.listen(port, () => {
        console.log("listening for requests ");
    })
})