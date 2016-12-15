var template = require('./template.marko');

function reverseName(name){
	return name.split('').reverse().join('');
}

/* Custom tag should export a function that would render that component */
module.exports = function(input,out){
	template.render({
		reversedName : reverseName(input.firstName + " " + input.lastName)
	}, out);
}