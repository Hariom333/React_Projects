var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

 fs.open('demo.html','w', function(err){

if(err) throw err;
console.log('file is open now!!');

 } );


}).listen(8080);