var express = require('express');

var app = express();

app.get('/',function(request,response){
	response.send('Hello World!');
	response.end();
});

app.post('/', function (req, res) {
  res.send('Got a POST request');
});

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

var server = app.listen(8000,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Application is running on port: '+port+' and at address :'+host);
});	