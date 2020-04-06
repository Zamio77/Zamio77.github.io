// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 8000;

// Spin up the server
const server = app.listen(port, listening);

// Callback to degug
function listening() {
  console.log("server running");
  console.log(`running on localhost ${port}`);
}

// Callback function to complete GET '/all'
app.get("/all", (req, res) => {
  res.send(projectData);
  console.log(projectData);
});

// POST Route
app.post("/add", (req, res) => {
  console.log(req.body);

  projectData.temp = req.body.temp;
  projectData.date = req.body.date;
  projectData.content = req.body.content;

  res.send(projectData);
  console.log(projectData);
});

// Test to test the server is working
app.get("/test", (req, res) => {
  res.send("Hi, the server is working...");
});