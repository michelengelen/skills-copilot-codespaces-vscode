// Create web server
// 1. Load the express module
const express = require("express");
// 2. Create a new web server
const app = express();
// 3. Define a new route for the root URL
app.get("/", function (request, response) {
  response.send("Hello, world!");
});
// 4. Start the web server on port 3000
app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});

// Create a new route for the /comments URL
app.get("/comments", function (request, response) {
  response.send("This is the comments page!");
});

// Create a new route for the /comments/new URL
app.get("/comments/new", function (request, response) {
  response.send("This is the page for adding a new comment!");
});

// Create a new route for the /comments/:id URL
app.get("/comments/:id", function (request, response) {
  response.send("This is the page for comment " + request.params.id);
});

// Create a new route for the /comments/:id/edit URL
app.get("/comments/:id/edit", function (request, response) {
  response.send("This is the page for editing comment " + request.params.id);
});

// Create a new route for the /comments/:id/delete URL
app.get("/comments/:id/delete", function (request, response) {
  response.send("This is the page for deleting comment " + request.params.id);
});

// Start the web server on port 3000
app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});