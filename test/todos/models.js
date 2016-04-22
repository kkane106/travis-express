var utils = require('../utils');
var should = require('chai').should();
var Todo = require('../../app_api/models/todos').Todo;

describe('Todos: models', function() {
	describe('#create()', function() {
		it('should create a new Todo', function(done) {
			var todo = {
				title : 'Get milk'
			};
			Todo.create(todo, function(err, createdTodo) {
				should.not.exist(err);

				createdTodo.title.should.equal('Get milk');

				done();
			});
		});
	});
});