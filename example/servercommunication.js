var net = require('net');
var countvar;
var server = net.createServer(function(connectionListener) {

this.getConnections(function(err, count) {
	countvar = count;
	if (err) {
		console.log('Error getting connections');
	} else {
	connectionListener.write('connections to server: ' + count + '\r\n');
	}
});

connectionListener.on('end', function() {
	console.log('disconnected');
});

connectionListener.write('hello you are successfully connected to the server\r\n');
	
connectionListener.on('data', function(data) {
	console.log('message form Client '+countvar+ ' is: ' + data);
});

connectionListener.on('error', function(err) {
	console.log('server error: ' + err);
});
});

server.on('error',function(err){
	console.log('Server Error:'+err);
});


server.on('data',function(data){
	console.log(data.toString());
});

server.listen(8080,function(err){
	console.log('Listening to port number 8080');
});



