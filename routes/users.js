var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/home', function(req, res){
  res.render('home')
});
router.get('/sneaker', function(req, res){
  res.render('sneaker')
});
router.get('/cart', function(req, res){
  res.render('cart')
});
router.get('/checkout', function(req, res){
  res.render('checkout')
});
router.get('/success', function(req, res){
  res.render('success')
});


module.exports = router;
