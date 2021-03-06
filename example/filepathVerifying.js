var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");



function send404(response){
	response.writeHead(404,{"Content-Type":"text/plain"});
	response.write("Error 404 : Resource not Found");
	response.end();
}

function sendpage(response,filePath,fileContents){
	response.writeHead(200,{"Content-Type":mime.lookup(path.basename(filePath))});
	response.end(fileContents);
}

function serverWorking(response,abspath){
	fs.exists(abspath,function(exists){
		if(exists){
			fs.readFile(abspath,function(err,data){
				if(err){
					send404(response);
				}
				else{
				sendpage(response,abspath,data)
				}
			});
		}
		else{
			send404(response);
		}
	});
}

http.createServer(function(request, response) {
  var filePath = false;

  if (request.url == '/') {
    filePath = "public/index.html";
  } else {
    filePath = "public" + request.url;
  }

  var absPath = "./" + filePath;
  serverWorking(response, absPath);
}).listen('3000');