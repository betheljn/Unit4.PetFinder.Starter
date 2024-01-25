// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();
const PORT = 8080;

// GET - / - returns homepage
// Serve the client homepage that renders the data in the browser.
app.get("/", (req, res) => {
    res.send("HomePage");
})


// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// GET - all pets
// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    res.send(pets); 
    // send the pets array as a response

});

// GET - pet by owner name -
// Retrieve a single pet from the database by owner's name using a query string.
app.get('/api/v1/pets/owner', (req, res) => {
    // find the pet in the pets array
const pet = pets.find(pet => pet.owner === req.query.owner);
    // send the pet as a response
res.send(pet)
});

// Get = pet by id -
// Retrieve a single pet from the database by name parameter.
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    // find the pet in the pets array
const pet = pets.find(pet => pet.name === req.params.name);
// send the pet as a response
res.send(pet)
});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;