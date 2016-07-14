var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');
var routes = require('./routes/index');

var app = express();
var compiler = webpack(webpackConfig);

// app.use('/', routes);
app.use(express.static('./www'));
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.get('/tweet', function(req,res){
  res.redirect('/tweet');
  res.end()
})


app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  console.log("app listening at http://localhost:8080");
});
