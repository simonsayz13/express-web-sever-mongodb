const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');

const studentRoute = require('./routes/students.route')

const mongodbURI = process.env.mongodbURI
console.log(mongodbURI)
// Establish mongoDB connection
mongoose
.connect(mongodbURI)
.then( connected => {
  console.log(`Connected to MongoDB! Database name: ${connected.connections[0].name}`)
})
.catch((err) => {
  console.error(`Error connection to MongoDB: ${err.reason}`)
})

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Set root of route
app.use('/', studentRoute)

// set port, listen for requests
const PORT = process.env.PORT || 6969;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});