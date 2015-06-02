var net = require('net');

var client = net.createConnection({port: 8080, host:'127.0.0.1'},function() {
	console.log('connection successful');
	this.write('hello');
});

client.on('data', function(data){
	console.log(data.toString());
});

client.on('error', function(error) {
console.log(error);
});

client.on('end', function() {
	console.log('connection ended');
});