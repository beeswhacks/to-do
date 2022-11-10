var express = require('express');
const Task = require('../models/task');
var router = express.Router();

express.json();

router.post('/', async (req, res, next) => {
    Task.findById(req.body.taskID, (err, task) => {
        if (err) {console.error(err)};
        if (res) {
            task.completed = !task.completed;
            task.save();
        };
    });
    res.sendStatus(200);
}
);

module.exports = router;