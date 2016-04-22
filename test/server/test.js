var expect = require('chai').expect;
var request = require('supertest');
var utils = require('../utils');
var mongoose = require('mongoose');

describe("Test Todo API", function() {
	var server;
	
	beforeEach(function() {
		server = require('../../app');
	});

	it('#index -> returns 200', function(done) {
		request(server)
			.get('/api/todos')
			.expect(200, done);
	});

	it('#show -> returns 404 if ID is not found', function(done) {
		request(server)
			.get('/api/todos/badrequest')
			.expect(404, done);
	});
});
