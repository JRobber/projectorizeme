var express = require('express')
var data = require('./dataSample');
var app = express();

app.use(express.static(__dirname))

app.get('/api/project', function(req, res){
	res.send(data);
})

app.listen('3000', function(){
	
})