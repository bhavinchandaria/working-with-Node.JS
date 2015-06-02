
var mysql =  require('mysql');
var connection =  mysql.createConnection({
  	host : "10.0.3.7:3306",
  	user : "appserver",
  	password: "data"
  });

connection.connect(function(){
	console.log('Connected');
});

var strQuery = "show databases";
	connection.query(strQuery, function(rows){
  		console.log( rows );
  	});

