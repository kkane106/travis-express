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
	});
};

module.exports.create = function(req,res) {
	var todo = new Todo( {title:req.body.title});
	todo.save(function(err) {
		if (err) {
			console.error(err);
			res.sendStatus(500)
		}
		res.send(todo);
	});
};

module.exports.show = function(req,res) {
	Todo
		.findOne({_id : req.params.id})
		.exec(function(err,todo) {
			if(err) {
				console.error(err);
				res.sendStatus(500);
			}
			res.send(todo);
		});
};

module.exports.update = function(req,res) {
	var todo = req.body;
	Todo
		.findByIdAndUpdate(todo.id, 
			{ $set : 
				{ title : todo.title }
			},
			{new : true}) // return the updated document, not the original
		.exec(function(err,doc) {
			if(err) {
				console.error(err);
				res.sendStatus(500);
			}
			res.send(doc);
		});
};

module.exports.delete = function(req,res) {
	Todo
		.findByIdAndRemove(req.params.id)
		.exec(function(err, doc) {
			if(err) {
				console.error(err);
				res.sendStatus(500);
			}
			res.send("Deleted todo: " + doc.title);
		});
};