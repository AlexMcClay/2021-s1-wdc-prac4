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


var counter = 0;
router.get('/color.html', function(req, res, next) {
  var color;

  if (counter == 0) {
    color = "red";
    counter = 1;
  }
  else if (counter == 1) {
    color = "yellow";
    counter = 2;
  }
  else if (counter == 2) {
    color = "green";
    counter = 3;
  }
  else if (counter == 3) {
    color = "blue";
    counter = 0;
  }
    res.send(`<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
  <title>Express</title>
  <link rel="stylesheet" href="/stylesheets/style.css">
</head>

<body>
  <h1 style="color:${color};">${color}</h1>

</body>

</html> `);

});

module.exports = router;
