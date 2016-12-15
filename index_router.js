var users = require('./Users.json');

var express = require('express');

var router = express.Router();

router.use(function(req,res,next){
	console.log("%s %s %s", req.method, req.url, req.originalUrl);
	next();
});

router.get('/events', function(req,res){
	res.send('Events are happenning around you' + users.length);
});

router.param('userId', function(req,res,next,userId){
	for(var i=0;i<users.length;i++){
		if(users[i].id === userId){
			req.user = users[i];
		}	
	}
	next();
});

/* route is /calendar/user/101 or /calendar/user/102 */
router.get('/user/:userId', function(req,res){
	var response = "Response received";
	if(req.user){
		response = response  + " User found: " + JSON.stringify(req.user);
	}
	res.send(response);
});

var app = express();

/* A separate route handler for the /calendar */
app.use('/calendar', router);

app.listen(3000, 'localhost');