// 25 SERVER 
//Author: Martin Coleman

//VARIABLES /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var http = require('http');
var express = require('express');
var app = express();
// bundle routes
var apiRoutes = express.Router();
var serv = require('http').Server(app);

//SERVER METHODS & ROUTES //////////////////////////////////////////////////////////////////////////////////////////////////////////////

//serves website using express
app.use('/',express.static('WebClient'));

//serve single player game client
app.use('/singleplayer',express.static('GameClient'));

//serve multiplayer game server
app.get('/multiplayer', function (req, res) {
  res.send('Multiplayer coming soon!');
});

//server listening 
console.log("Server Running");
serv.listen(8080);