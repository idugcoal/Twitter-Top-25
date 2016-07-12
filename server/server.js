var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');
var app = express();

var routes = require('./routes/index');

var compiler = webpack(webpackConfig);

app.use('/', routes);

app.use(express.static('./www'));

var secret = require('../secret');
console.log('secret', secret);
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

// var server = app.listen(3000, 'localhost', function() {
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('Example app listening at http://%s:%s', host, port);
// });

app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  console.log("app started");
});
