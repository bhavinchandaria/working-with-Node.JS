var jsonObj = {'key':'value'};
console.log(JSON.stringify(jsonObj));

jsonObj.key1 = 'value1';
console.log(JSON.stringify(jsonObj));

jsonObj.key2 = 'value2';
console.log(JSON.stringify(jsonObj));

delete jsonObj['key'];
console.log(JSON.stringify(jsonObj));

for(var i in jsonObj){
	console.log(i+":"+jsonObj[i]);
}