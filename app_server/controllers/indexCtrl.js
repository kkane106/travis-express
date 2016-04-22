var request = require('request');
var rootURI = 'http://localhost:3000';
if (process.env.NODE_ENV === 'production') {
	rootURI = process.env.HEROKU_URL;
}

module.exports.index = function(req, res, next) {
	request(rootURI + '/api/todos', function (err, response, body) {
		res.render('index', { title: 'Express', todos: JSON.parse(body) });
	});
};

module.exports.new = function(req,res) {
	res.render('new');
};

module.exports.edit = function(req,res) {
	request(rootURI + '/api/todos/' + req.params.id, 
		function(err,response,body) {
		var todo = JSON.parse(body);
		res.render('edit', { todo : todo });
	});
};

module.exports.show = function(req,res) {
	request(rootURI + '/api/todos/' +req.params.id, 
		function(err,response,body) {
			var todo = JSON.parse(body);
			res.render('show', { todo : todo });
	});
};