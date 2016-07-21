var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');
var routes = require('./routes/index');
var path = require('path');
var Twitter = require('twitter');
var secret = require('../secret');
var cors = require('cors');

var app = express();
var bodyParser = require('body-parser');
var compiler = webpack(webpackConfig);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('./www'));
app.use(express.static('./style'));
app.use(cors({ origin: 'http://localhost:8080', credentials: true }));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
  noInfo: true
}));

// app.use(webpackDevMiddleware(compiler, { noInfo: true}));

app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  console.log("app listening at http://localhost:8080");
});

const client = new Twitter({
  consumer_key: secret.twitter.consumerKey,
  consumer_secret: secret.twitter.consumerSecret,
  access_token_key: secret.twitter.accessToken,
  access_token_secret: secret.twitter.accessTokenSecret
});

app.post('/getTweets', function(req, res) {
  console.log('in getTweets')
  var body = ''
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    let username = JSON.parse(body);
    console.log('body', body);

    var params = {screen_name: username.username, count: '25'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if(!error) {
        res.send(tweets);
      } else {
        console.log('error', error);
      }
    });
  })
})


