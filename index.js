var express = require('express');

var app = express();

/* Middleware function, that will execute before each request handler. It logs the request method and url in cosnsole. */
app.use('/users',function(req, res, next){
	console.log("%s %s", req.method, req.url);
	next();
});

app.use('/admin', function(req,res,next){
	console.log("%s", req.path);
	next();
});
app.get('/users/sandhya', function(req,res){
	console.log("%s", req.path);
	res.send("Hi there Sandhya!!! :)");
});

app.get('/admin/shankari', function(req,res){
	res.send("Hey There Shank! How are youd doing?");
});

app.listen(3000, 'localhost');