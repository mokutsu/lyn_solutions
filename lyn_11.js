var http = require('http');
var fs = require('fs');

function connectionCallback(request, response){
  var filepath = process.argv[3];
  var readstreamobj = fs.createReadStream(filepath);
  readstreamobj.pipe(response);
}


var server = http.createServer(connectionCallback);
var portNumber = parseInt(process.argv[2]);
server.listen(portNumber).on('error', function(err) {console.log(err);});
