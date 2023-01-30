const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const Movie = require('./movies')
const dbUrlAtlas = "mongodb+srv://vikas1293:vikas1293@cluster0.modfvmj.mongodb.net/?retryWrites=true&w=majority"
const port = process.env.PORT || 5000
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(dbUrlAtlas);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


app.get('/', async (req, res) => {
    const movies = await Movie.find({});
    res.json(movies)
})

connectDB().then(() => {
    app.listen(port, () => {
        console.log("listening for requests ");
    })
})