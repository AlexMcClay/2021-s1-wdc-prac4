var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var Prev_Date = " ";
var date = " ";
router.get('/last.txt', function(req, res, next) {
    Prev_Date = date;
    date = new Date();
    res.send(Prev_Date);

});

module.exports = router;
