var http = require('http');
var BufferList = require('bl');
var async = require('async');

function makeGetRequest(callback) {
  http.get(this.url, function (resp) {
    var rawData = '';
    resp.on('data', function(chunk) {
      rawData += chunk;
    }).on('end', function(data) {
      callback(null, rawData);
    }).on('error', function (e) {
      callback(e, 'error occurred');
    });
  });
}

function masterFunction() {
  // console.log(process.argv);
  var urls = process.argv.slice(2);
  var urlFunctions = urls.map(function(url) {
    return makeGetRequest.bind({url:url});
  });

  async.parallel(urlFunctions, function(err, results) {
    results.forEach(function(result) {
      console.log(result);
    });
  })
}

masterFunction();
