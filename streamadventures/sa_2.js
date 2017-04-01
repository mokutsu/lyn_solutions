var fs = require('fs');
var fileToRead = process.argv[2];

fs.createReadStream(fileToRead).pipe(process.stdout);
