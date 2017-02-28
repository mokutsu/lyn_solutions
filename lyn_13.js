var http = require('http');
var map = require('through2-map');
var url = require('url');

function connectionCallback(request, response){
  if (request.method !== 'GET') {
    return;
  }

  var requestDetails = url.parse(request.url, true);
  var date = new Date(requestDetails.query.iso);
  if (requestDetails.pathname=='/api/parsetime') {
    date = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds(),
    }
    response.writeHead(200, { 'Content-Type': 'application/json' });
    return response.end(JSON.stringify(date));
  } else if(requestDetails.pathname == '/api/unixtime') {
    var jsonTime = {
      "unixtime": date.getTime(),
    }
    return response.end(JSON.stringify(jsonTime));
  }
  return;
}


var server = http.createServer(connectionCallback);
var portNumber = parseInt(process.argv[2]);
server.listen(portNumber).on('error', function(err) {console.log(err);});
