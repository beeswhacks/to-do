var express = require('express');
const Task = require('../models/task');
var router = express.Router();

express.json();

router.post('/', function(req, res, next) {
  console.log('New task submitted: ', req.body.newTaskContent);
  
  Task.create(
    {content: req.body.newTaskContent, completed: false}, 
    function (err, newTask) {
      if (err) {
        console.log('New task could not be saved:', err);
      };
      if (newTask) {
        console.log('New task created successfully: ', newTask.content);
      };
      res.redirect('/');
  });
});

module.exports = router;