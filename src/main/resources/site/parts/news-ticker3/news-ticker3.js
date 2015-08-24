var portal = require('/lib/xp/portal'); // Import the portal functions
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the Thymeleaf rendering function
var lib = require('/lib/xp/content');
var util = require('utilities'); // My own extension functions

// Handle the GET request
exports.get = function(req) {

	var model = {};

	// Find the current component from request
	var component = portal.getComponent();

	var result = lib.getChildren({
	    key: '/hello-world/newsticker',
	    start: 0,
	    count: 5,
	    sort: '_modifiedTime ASC'
	});

	model.content = result;

	util.log(result);

    // Specify the view file to use
    var view = resolve('news-ticker3.html');

    // Return the response object
    return {
        body: thymeleaf.render(view, model)
    }
};