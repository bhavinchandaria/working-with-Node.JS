var http = require('http');

function onRequest(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("<html><head><title>Server Example</title></head><body><h1>Hello World!!!</h1></body></html>");
	response.end();
}

http.createServer(onRequest).listen('8000');