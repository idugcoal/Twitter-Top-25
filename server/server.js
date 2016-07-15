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

// app.use('/', routes);
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
}));

const client = new Twitter({
  consumer_key: secret.twitter.consumerKey,
  consumer_secret: secret.twitter.consumerSecret,
  access_token_key: secret.twitter.accessToken,
  access_token_secret: secret.twitter.accessTokenSecret
});

// app.get('/getTweets', function(req, res) {
  
//   console.log('REQUEST', req.headers)
//   // console.log('in getTweets route')
//   var params = {screen_name: 'idugcoal', count: '1'};
//   client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if(!error) {
//       // console.log(tweets[24]);
//       res.send(tweets);
//     }
//     // console.log(error);
//   });
// });
app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  console.log("app listening at http://localhost:8080");
});


app.post('/getTweets', function(req, res) {
  var body = ''
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    console.log('REQUEST', body);
    // var jsonObj = JSON.parse(body);
    // console.log('jsonObj', jsonObj);
    var params = {screen_name: body, count: '2'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if(!error) {
        console.log('no error');
        res.send(tweets);
      } else {
        console.log('error', error);
      }
    });
  })
  console.log('BODY', JSON.stringify(body));

  

})

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




