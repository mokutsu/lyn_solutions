var http = require('http');
var map = require('through2-map');

function connectionCallback(request, response){
  // console.log(request);
  if (request.method != 'POST') {
    return;
  }


  request.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()})).pipe(response);
}


var server = http.createServer(connectionCallback);
var portNumber = parseInt(process.argv[2]);
server.listen(portNumber).on('error', function(err) {console.log(err);});
