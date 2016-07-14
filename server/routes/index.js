var express = require('express');
var router = express.Router();
var Twitter = require('node-twitter-api');
var secret = require('../../secret');

var twitter = new Twitter({
  consumerKey: secret.twitter.consumerKey,
  consumerSecret: secret.twitter.consumerSecret,
  callback: secret.twitter.callbackUrl
})

var _requestSecret;

router.get('/testing', function(req, res) {
	res.send("<h1>testing is neato</h1>");
})

router.get("/request-token", function(req, res) {
  console.log('in request token');
  twitter.getRequestToken(function(err, requestToken, requestSecret) {
    if(err) {
      res.status(500).send(err);
    } else {
      _requestSecret = requestSecret;
      res.redirect("https://api.twitter.com/oauth/authenticate?oauth_token=" + requestToken);
    }
  });
});

module.exports = router;