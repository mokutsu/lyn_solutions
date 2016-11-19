var http = require('http');

url = process.argv[2];

function callback(response) {
  response.on("error", function(err) {
    console.log(err);
    throw err;
  })
  response.on("data", function(data) {
    console.log(data.toString());
  })
}

http.get(url, callback).on('error', console.error);
