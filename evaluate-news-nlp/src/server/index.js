const dotenv = require('dotenv')
dotenv.config();

var path = require('path')
var aylien = require("aylien_textapi")
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

var aylienApi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


// setup for the Api work

// Setup empty JS object to act as endpoint for all routes
projectData = {};

app.get('/api', (req, res) => {
    req.send("I exist!");
})