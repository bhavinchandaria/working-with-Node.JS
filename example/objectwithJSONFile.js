var jsonObj = require("./json/object.json");
var mime = require("mime");
var http = require("http");
var path = require("path");


http.createServer(function(request,response,fileContents){
	response.writeHead(200,{"Content-Type":mime.lookup(path.basename("./json/object.json"))});
	response.write(JSON.stringify(jsonObj));
	response.end(fileContents);
}).listen(8000);