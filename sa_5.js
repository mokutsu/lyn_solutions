var through = require('through2');
var split = require('split');
var streamthrough = through(write, end);
var count = 0;

function write(line, encoding, next) {
  line = line.toString() + '\n';
  line = (count % 2 == 0) ? line.toLowerCase() : line.toUpperCase();
  this.push(line);
  count += 1;
  next();
}

function end(done) {
  done();
}

process.stdin.setEncoding('utf8');

process.stdin
  .pipe(split())
  .pipe(streamthrough).pipe(process.stdout);
