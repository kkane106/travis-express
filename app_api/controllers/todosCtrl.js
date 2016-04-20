var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

module.exports.index = function(req,res) {
	Todo
		.find()
		.exec(function(err,todos) {
			if (err) {
				res.status(404)
				res.send("NOT FOUND");
			}
			res.send(todos);
	})
};