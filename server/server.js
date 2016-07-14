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
console.log('client', client)
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, (error, tweets, response) => {
  if(!error)
    console.log(tweets);
  console.log(error);
});


app.get('/*', (req,res) => {
 res.sendFile(path.resolve('www/index.html'));
});

// app.get('/tweet', function(req,res){
//   res.redirect('/tweet');
//   res.end()
// })


app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  console.log("app listening at http://localhost:8080");
});
