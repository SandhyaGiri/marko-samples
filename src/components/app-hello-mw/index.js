'use strict';

/* Building reusable UI component using marko-widget */
module.exports = require('marko-widgets').defineComponent({
    template: require.resolve('./template.marko'),
 
    getTemplateData : function(state, input){
		var firstName = input.firstName;
        var lastName = input.lastName;

		return {
			fullName : lastName + "," + firstName
		};
	},
 
 	init: function() {
 		console.log('This is the binded component: ' + this.el);
    },
 
    setSelected: function(selected) {
        if (selected) {
            this.el.style.backgroundColor = 'yellow';
        } else {
            this.el.style.backgroundColor = null;
        }
    },
    handleClickEvent: function(event,el) {
        this.setSelected(true);
    }
});