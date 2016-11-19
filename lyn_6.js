var lyn_6_module = require('./lyn_6_mod1');


var folder = process.argv[2];
var filetype = "." + process.argv[3];

lyn_6_module(folder, filetype, function(err, data) {
  if(err) {
    throw err;
  }
  data.forEach(function(file) {
    console.log(file);
  });
});
