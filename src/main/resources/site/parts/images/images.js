var portal = require('/lib/xp/portal'); // Import the portal functions
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the Thymeleaf rendering function
var lib = require('/lib/xp/content');
var util = require('utilities'); // My own extension functions

// Handle the GET request
exports.get = function(req) {

	var model = {};

	// Find the current component from request
	var component = portal.getComponent();

//	util.log(component);

	var content = component.config;
		
	var imageUrl = null;

	// Get the true image URL (only the ID to it is stored in Enonic)
	if ( content.image ) {
		imageUrl = execute('portal.imageUrl', {
			id: image.image,
			quality: 90, // Default is 85
			filter: "scalewidth(460)"
		});
	}

	model.image = imageUrl;
	model.header = content.data.header;

    // Specify the view file to use
    var view = resolve('images.html');

    // Return the response object
    return {
        body: thymeleaf.render(view, model)
    }
};