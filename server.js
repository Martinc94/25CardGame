// 25 SERVER 
//Author: Martin Coleman

//VARIABLES /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var http = require('http');
var express = require('express');
var app = express();
// bundle routes
var apiRoutes = express.Router();
var serv = require('http').Server(app);
var path = require('path');

//SERVER METHODS & ROUTES //////////////////////////////////////////////////////////////////////////////////////////////////////////////

//serves website using express
app.use('/',express.static('WebClient'));

//serve single player game client
//app.use('/singleplayer',express.static('GameClient'));
app.use('/mode',express.static('GameClient'));

app.get('/mode/singleplayer', function(req, res) {
  var noOfPlayers = req.param('players');
  switch (noOfPlayers) {
    case '2':
      //one cpu
      res.sendFile(path.join(__dirname + '/GameClient/html/index.html'));
      break;
    case '3':
      //two cpu
      res.sendFile(path.join(__dirname + '/GameClient/html/index2cpu.html'));
      break;
    default:
      res.send('Incorrect player amount');
      break;
  }//switch
});

//select how many players
app.get('/select', function (req, res) {
  res.sendFile(__dirname + '/WebClient/singlePlayer.html');
});

//serve multiplayer game server
app.get('/multiplayer', function (req, res) {
  res.send('Multiplayer coming soon!');
});

//server listening 
console.log("Server Running");
serv.listen(8080);