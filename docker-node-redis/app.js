var express = require('express'),
app = express(),
redis = require('redis').createClient(
	process.env.REDIS_PORT_6379_TCP_PORT || 6379,
	process.env.REDIS_PORT_6379_TCP_ADDR || '127.0.0.1',
	{}
),
server = require('http').createServer(app);

app.get('/', function(req, res) {
  res.json({
    status: redis ? "ok" : "not ok"
  });
});
var port = process.env.HTTP_PORT;
server.listen(port);
console.log('Listening on port ' + port);