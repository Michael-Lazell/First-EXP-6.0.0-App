var portal = require('/lib/xp/portal'); // Import the portal functions
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the Thymeleaf rendering function

var util = require('/lib/utilities'); // My own extension functions

// Handle the GET request
exports.get = function(req) {

	var model = {};

	// Find the current component from request
	var component = portal.getComponent();

	// Find a config variable for the component
	var config = component.config;

	model.config = config;

	//util.log(config);

    // Specify the view file to use
    var view = resolve('news-ticker2.html');

    // Return the response object
    return {
        body: thymeleaf.render(view, model)
    }
};