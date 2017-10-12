var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/google', function(req,res){
  res.render('google')
});

router.get('/fujitsu', function(req,res){
  res.render('fujitsu')
});

router.get('/nightwatch', function(req,res){
  res.render('nightwatch')
});

router.get('/about', function(req,res){
  res.render('about')
});

module.exports = router;
