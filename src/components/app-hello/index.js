var defineRenderer = require('marko/defineRenderer');

/* Custom tag can use marko/defineRenderer to export a renderer function, that will render the component. */
module.exports = defineRenderer({
	template: require('./template.marko'),
	getTemplateData: function(input) {
        var firstName = input.firstName;
        var lastName = input.lastName;
 
        return {
            fullName: lastName + ',' + firstName
        };
    }
})