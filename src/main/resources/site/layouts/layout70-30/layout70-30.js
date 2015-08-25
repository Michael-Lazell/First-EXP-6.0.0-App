var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

exports.get = function(req) {

	// Find the current component.
	var component = portal.getComponent();

	// Define the model
	var model = {
		component: component,
		leftRegion: component.regions["left"],
		rightRegion: component.regions["right"]
	};

	// Resolve the view
	var view = resolve('layout70-30.html');

    // Return the response object
    return {
        body: thymeleaf.render(view, model),
    	contentType: 'text/html'
    }

};