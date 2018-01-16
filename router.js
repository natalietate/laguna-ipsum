// Require modules
const loremIpsum = require('./generator.js');
const querystring = require('querystring');
const fs = require('fs'); // fs means 'file system'

// Require Express and create an Express router object
const express = require('express');
const router = express.Router();

// Route for index.html (GET)
router.get('/', (request, response) => {
  response.setHeader('Content-Type', 'text/html');
  // grab contents of page in a variable
  let fileContents = fs.readFileSync('./public/index.html', {encoding: 'utf8'});
  // send a response to the client with that file
  response.write(fileContents);
  response.end();
});

// Route to generate text and reload updated index.html (POST)
router.post('/', (request, response) => {
  request.on('data', function(inputValue) {
    // convert POST data into string
    let query = inputValue.toString(); // numberOfParagraphs=5
    // parse into a key/value pair and store the value as variable
    let numberOfParagraphs = querystring.parse(query).numberOfParagraphs;
    // generate the lorem text with the getAllParagraphs function
    let loremIpsumText = loremIpsum.getAllParagraphs(numberOfParagraphs);
    // put contents of index.html in a variable
    let fileContents = fs.readFileSync('./public/index.html', {encoding: 'utf8'});
    // replace placeholder div with the generated lorem text
    fileContents = fileContents.replace('<div class=\'placeholder\'></div>', loremIpsumText);
    response.setHeader('Content-Type', 'text/html');
    // send response to client with modified index.html
    response.write(fileContents);
    response.end();
  });
});

// allows us to require the file inside of app.js
module.exports = router;