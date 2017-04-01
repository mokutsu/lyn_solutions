var concat = require('concat-stream');

// Readable vs writeable streams
// Because concat is a writeable stream, it becomes the end of the line and doesn't produce anything to pipe out 

process.stdin.setEncoding('utf8');

process.stdin
  .pipe(concat(function (chunk) {
    console.log(chunk)
  }))
  // /.pipe(process.stdout)
  .end()
