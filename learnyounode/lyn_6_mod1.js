var fs = require('fs');

function modularFunction(dirName, extension, callbackFn) {
  var matchedFiles = [];
  var filetype = "." + extension;
  fs.readdir(dirName, function(err, files_arr) {
    if (err) {
      return callbackFn(err);
    }
    files_arr.forEach(function(file) {
      if (file.indexOf(extension) > 0) {
        matchedFiles.push(file);
      }
    });
    return callbackFn(null, matchedFiles);
  });
};

module.exports = modularFunction;
