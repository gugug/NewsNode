let express = require('express');
let path = require('path');
let app = express();
let http = require('http');

app.use(express.static(path.join(__dirname, './dist/app/')));
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, './dist/app/index.html'));
})
app.get('/detail', function(req, res) {
	res.sendFile(path.join(__dirname, './dist/app/detail.html'));
})
app.get('/topic', function(req, res) {
	res.sendFile(path.join(__dirname, './dist/app/topic.html'));
})

http.createServer(app).listen(8088, function() {
	console.log('express server listening on port 8088');
})

module.export = app;
