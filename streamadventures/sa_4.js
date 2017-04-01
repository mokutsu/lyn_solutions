var through = require('through2');

var stream = through(write, end);

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

process.stdin.setEncoding('utf8');

process.stdin.pipe(stream).pipe(process.stdout);
