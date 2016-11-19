var fs = require('fs');

var folder = process.argv[2];
var filetype = "." + process.argv[3];

var files = fs.readdir(folder, function(err, files_arr) {
  files_arr.forEach(function(file) {
    if (file.indexOf(filetype) > 0) {
      console.log(file);
    }
  });
});
