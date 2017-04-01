var fs = require('fs');

var buffer_obj = fs.readFile(
  process.argv[2],
  'utf-8',
  callBackFunction
);

function callBackFunction(err, readData) {
  if (err) throw err;
  var size = readData.split('\n').length - 1;
  console.log(size);
}


// NOTE:
// putting the next step in the callback function forces the execution of the chunk of code in callbackfunction to wait until the first task is done.  The asynchronous nature of the readFile function is built into the function, and most functions in the FS library.
