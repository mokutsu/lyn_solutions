var http = require('http');
var BufferList = require('bl');
var async = require('async');

// This function takes an argument, callback, given by the async library
function makeGetRequest(callback) {
  http.get(this.url, function (resp) {
    var rawData = '';
    // .on sets up event listeners for each event
    resp.on('data', function(chunk) {
      //chunk is implicitly coerced from a stream into a string with the += (because rawData is type string)
      rawData += chunk;
    }).on('end', function(data) {
      // on success, err=null, response=rawData are fed over to "callback" function provided by the async library
      callback(null, rawData);
    }).on('error', function (e) {
      callback(e, 'error occurred');
    });
  });
}

function masterFunction() {
  // only take the url command line arguments
  var urls = process.argv.slice(2);
  // set up array of functions to loop over for use by async.parallel. In order to get the correct url for each callback function without actually executing it, bind the url as a named function
  var urlFunctions = urls.map(function(url) {
    return makeGetRequest.bind({url:url});
  });
  // set up async.parallel with urlFunctions array, and master callback function to execute when array of functions is done executing (the library-provided callback hands back the response from each urlFunctions as an array of results )
  async.parallel(urlFunctions, function(err, results) {
    results.forEach(function(result) {
      console.log(result);
    });
  })
}

masterFunction();
