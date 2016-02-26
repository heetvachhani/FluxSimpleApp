/*
 * A singleton that operates as the central hub for application updates.
 */

var Dispatcher = require('flux').Dispatcher;
var Assign = require('object-assign');
var AppConstants = require('../constants/AppConstants');

var AppDispatcher = Assign(new Dispatcher(), {
	/**
	* @param {object} action The details of the action, including the action's
	* type and additional data coming from the view.
	*/
	handleViewAction: function(action) {
    	this.dispatch({
      		source: AppConstants.VIEW_ACTION,
      		action: action
    	});
  	}
});

module.exports = AppDispatcher;