var http = require('http');
var BufferList = require('bl');


url = process.argv[2];

function callback(response) {
  var statusCode = response.statusCode;
  var contentType = response.headers['content-type'];

  response.setEncoding('utf8');
  var bl = new BufferList()
  response.on('data', function(chunk) {
    bl.append(chunk);
  });

  response.on("end", function(data) {
    try {
      console.log(bl.toString().length);
      console.log(bl.toString());
    } catch (e) {
      console.log(e.message);
    }
  })
}

http.get(url, callback).on('error', console.error);
