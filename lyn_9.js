var http = require('http');
var BufferList = require('bl');


url1 = process.argv[2];
console.log(url1);
url2 = process.argv[3];
console.log(url2);
url3 = process.argv[4];
console.log(url3);

function callback(url, response) {
  var statusCode = response.statusCode;
  var contentType = response.headers['content-type'];
  var count = 2;

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
    if (count < 5) {
      count += 1;
      url = process.argv[count];
      http.get(url, callback);
    }
  })
}

http.get(url1, callback).on('error', console.error);
