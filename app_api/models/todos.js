var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
	title: {type: String, required: true}
});

mongoose.model('Todo', todoSchema);

module.exports.Todo = mongoose.model('Todo');