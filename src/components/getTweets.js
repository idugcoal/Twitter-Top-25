var http = require('http');

var options = {
  host: 'localhost',
  port: '8080',
  path: '/getTweets',
}

export default function getTweets(value, callback) {
  console.log('in getTweets');
  http.get(options, function(res) {
    res.on('data', function(chunk) {
      console.log('response in getTweets', chunk);
    })
  })
}
