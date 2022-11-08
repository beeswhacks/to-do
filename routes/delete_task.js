var express = require('express');
const Task = require('../models/task');
var router = express.Router();

express.json();

router.post('/', async (req, res, next) => {
    const deleted_task = await Task.findByIdAndDelete(req.body.taskID);
    res.sendStatus(200);
}
);

module.exports = router;