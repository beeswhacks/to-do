var mongoose = require('mongoose');

const schema = new mongoose.Schema({ 
    content: String, 
    completed: Boolean 
});

const Task = mongoose.model('Task', schema);

module.exports = Task;