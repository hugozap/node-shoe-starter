var shoe = require('shoe');
var http = require('http'); 

var ecstatic = require('ecstatic')(__dirname + '/public');
var server = http.createServer(ecstatic);


//Crear web socket como stream 
var sock = shoe(function (stream) {
   stream.write('a');
   stream.write('b');
   stream.end();
});

sock.install(server, '/data');

server.listen(9999, function(){
	console.log('listening at 9999');
});