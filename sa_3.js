process.stdin.setEncoding('utf8');

process.stdin.pipe(process.stdout);

/*
Key points:
1. The process.stdin property returns a Readable stream equivalent to or associated with stdin (fd 0).  Readable streams are an abstraction for a source from which data is consumed.

Readable streams effectively operate in one of two modes: flowing and paused.  All Readable streams begin in paused mode but can be switched to flowing mode in one of the following ways:

 - Adding a 'data' event handler.
 - Calling the stream.resume() method.
 - Calling the stream.pipe() method to send the data to a Writable.


*/
