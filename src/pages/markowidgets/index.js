var template = require('./template.marko');

module.exports = function(req,res,next){
	template.render({
		firstName: 'Sandhya',
		lastName:'Giri',
		colors: ['red','blue','green']
	}, res);
}
