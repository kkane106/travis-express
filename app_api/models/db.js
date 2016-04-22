var mongoose = require('mongoose');
var dbLocation = 'mongodb://localhost/heroku';
if (process.env.NODE_ENV === 'production') {
	dbLocation = process.env.MONGODB_URI;
} else if (process.env.NODE_ENV === 'test') {
  dbLocation = 'mongodb://localhost/todoTest'
}
mongoose.connect(dbLocation);

// CONNECTION EVENT LOGS
// Disconnected
mongoose.connection.on('disconnected', function(){
  console.log('Mongoose has disconnected from: ' + dbLocation);
});
// Error
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection has failed due to error: ' + err);
});
// Connected
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to: ' + dbLocation);
});

// TERMINATION / EVENT LOGGING
// Nodemon restarts
process.once('SIGUSR2', function () {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected by nodemon restart');
    process.kill(process.pid, 'SIGUSR2');
  });
});
// Application termination (ctrl + c)
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected by Signal Interrupt');
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app termination', function () {
    process.exit(0);
  });
});

require('./todos');

module.exports.db = dbLocation;