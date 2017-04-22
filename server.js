//Dependencies
var express = require("express");
var app = express();
var body_parser= require("body-parser");
//Port to be listened to.
var PORT = 4000;


require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function () {
  console.log('Listening on PORT: ' + PORT);
});

//ROUTES