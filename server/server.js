var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');
var routes = require('./routes/index');
var path = require('path');
var Twitter = require('twitter');
var secret = require('../secret');

var app = express();
var compiler = webpack(webpackConfig);

// app.use('/', routes);
app.use(express.static('./www'));
app.use(express.static('./style'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

const client = new Twitter({
  consumer_key: secret.twitter.consumerKey,
  consumer_secret: secret.twitter.consumerSecret,
  access_token_key: secret.twitter.accessToken,
  access_token_secret: secret.twitter.accessTokenSecret
});

app.get('/getTweets', function(req, res) {
  
  console.log('REQUEST', req)
  // console.log('in getTweets route')
  var params = {screen_name: 'idugcoal', count: '1'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if(!error) {
      // console.log(tweets[24]);
      res.send(tweets);
    }
    // console.log(error);
  });
});

// app.get('/*', (req,res) => {
//   console.log('IN STAR ROUTE')
//   res.sendFile(path.resolve('www/index.html'));
// });

// app.get('/tweets', (req, res) => {
//   console.log('req', req, 'res', res);
// });

// app.get('/tweet', function(req,res){
//   res.redirect('/tweet');
//   res.end()
// })



app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  console.log("app listening at http://localhost:8080");
});
