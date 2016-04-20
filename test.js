var expect = require('chai').expect;
var request = require('supertest');
var mongoose = require('mongoose');

describe("Test node server on startup", function() {
	var server;
	
	beforeEach(function() {
		server = require('./app');
	});

	it('routes to index at /', function(done) {
		request(server)
			.get('/')
			.expect(200, done);
	});

// Removed API test, until I determine how to test Mongoose
	// it('responds to api request', function(done) {
	// 	request(server)
	// 		.get('/api/todos')
	// 		.expect(200, done);
	// });

	it('responds 404 if not found', function(done) {
		request(server)
			.get('/impossibleroute')
			.expect(404, done);
	});
});
