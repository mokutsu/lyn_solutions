var fs = require('fs');

var buffer_obj = fs.readFileSync(process.argv[2], 'utf8');
var size = buffer_obj.split('\n').length - 1;
console.log(size);
