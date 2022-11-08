var express = require('express');
const Task = require('../models/task');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Task.find({}, function (err, result) {
    if (err) {console.error(err)};
    if (result) {
      return res.render('index', {title: 'To-do list', tasks: result})
    };
  });
});

module.exports = router;