
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var errorhandler = require('errorhandler');
var bodyParser = require('body-parser');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.json());
//app.use(express.urlencoded());
// app.use(express.methodOverride());
// app.use(express.cookieParser());
// app.use(express.bodyParser());
//More Info in http://webapplog.com/migrating-express-js-3-x-to-4-x-middleware-route-and-other-changes/
app.use("/public", express.static(path.join(__dirname, 'public'))); //contains all HTML, js , css files

// development only
if ('development' == app.get('env')) {
    app.use(errorhandler());
}

var server = http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});


//Socket.io
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  console.log('A Websocket connection Established');
});
