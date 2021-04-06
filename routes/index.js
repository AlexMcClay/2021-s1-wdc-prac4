var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// First Task
var Prev_Date = " ";
var date = " ";
router.get('/last.txt', function(req, res, next) {
    Prev_Date = date;
    date = new Date();
    res.send(Prev_Date);

});

// Color Task
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

// Storing Dates and Displaying them Task
var list = "";
router.get('/log.html', function(req, res, next) {
    date = new Date();
    list += "<li>" + date + "</li>";
    res.send(`<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
  <title>Express</title>
  <link rel="stylesheet" href="/stylesheets/style.css">
</head>

<body>
  <ul id="list">
  ${list}
  </ul>

</body>

</html> `);



});

// Color 2 Task
var counter2 = 0;
router.get('/color.txt', function(req, res, next) {
  var color;

  if (counter2 == 0) {
    color = "red";
    counter2 = 1;
  }
  else if (counter2 == 1) {
    color = "yellow";
    counter2 = 2;
  }
  else if (counter2 == 2) {
    color = "green";
    counter2 = 3;
  }
  else if (counter2 == 3) {
    color = "blue";
    counter2 = 0;
  }
    res.send(color);

});

// Task 4.3
var list2 = "";
router.get('/log.json', function(req, res, next) {
    date = new Date();
    list2 += "<li>" + date + "</li>";
    res.send(list2);
});

router.get('/log-ro.json', function(req, res, next) {
    res.send(list2);
});

module.exports = router;
