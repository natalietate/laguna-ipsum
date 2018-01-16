// Require express and create an express application instance
const express = require('express');
// app is an object created by Express and has many methods
const app = express();

// Require the express routes defined in router.js
const routes = require('./router');

// Define the hostname and port where the server can be found
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

// Define the directory where static files (images, html, css) are found
// saved in /public folder
app.use(express.static('public'));

// Specify the routes to be used for our application 
app.use(routes);

// Begin accepting connections to the specified port
app.listen(port, () => {
  // Display server location information to the console
  console.log(`Server is listening at http://${hostname}:${port}/`);
});

