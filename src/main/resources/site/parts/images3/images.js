var portal = require('/lib/xp/portal'); // Import the portal functions
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the Thymeleaf rendering function
var lib = require('/lib/xp/content');
var util = require('utilities'); // My own extension functions

// Handle the GET request
exports.get = function(req) {

	var model = {};

	// Find the current component from request
	var component = portal.getComponent();

	model.config = me.component.config;

	var imageUrls = new Array();
	var imageKeys = new Array();

	imageKeys = model.config.image ? UTIL.data.forceArray( model.config.image ) : null;

	if (imageKeys) {
		for (var i = 0; i < imageKeys.length; i++) {
			if ( imageKeys[i] ) {

				var images = {}; // Temp object used to store our two image sizes

				images.src = execute('portal.imageUrl', {
					id: imageKeys[i],
					filter: "scaleBlock(440,440)",
					format: 'jpg'
				});

				images.href = execute('portal.imageUrl', {
					id: imageKeys[i],
					filter: 'scalewidth(1024)',
					format: 'jpg'
				});

				imageUrls.push(images);
			}
		}
	}

	model.imagelist = imageUrls.length > 0 ? imageUrls : null;

	util.log(result);

    // Specify the view file to use
    var view = resolve('images.html');

    // Return the response object
    return {
        body: thymeleaf.render(view, model)
    }
};