var request = require("request");
var http = require('http');
var by;
request("http://www.hirepro.in",function(error,response,body){
	//console.log(body);
	by=body;
});

function onRequest(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write(by);
	response.end();
}

http.createServer(onRequest).listen('8000');