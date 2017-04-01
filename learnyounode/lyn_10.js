var net = require('net');
var strftime = require('strftime');
// console.log(process.argv[2]);
// console.log(typeof(process.argv[2]));

function connectionListener(socket){
  var today = Date();

  var dateData = strftime('%Y-%m-%d %H:%M\n');
  socket.write(dateData);
  socket.end();
}


var server = net.createServer(connectionListener);
var portNumber = parseInt(process.argv[2]);
server.listen(portNumber).on('error', function(err) {console.log(err);});
