var thymeleaf = require('/lib/xp/thymeleaf'); // Import the thymeleaf render function
var contentSvc = require('/lib/xp/content'); // Import the content service functions
var portal = require('/lib/xp/portal'); // Import the portal functions

var util = require('utilities'); // My own extension functions

// Handle the GET request
exports.get = function(req) {
    var model = {};

    model.site = portal.getSite();

    // START MENUITEM CODE
    var subMenus = [];
    var siteContent = model.site; // portal.getSite() needs to be called already

    var children = contentSvc.getChildren({
        key: siteContent._id,
        count: 100
    });

    util.log(children);

    children.contents.forEach( function(child) {
        if (child.data) {
        	if (child.data.menuItem) {
	        	if (child.data.menuItem === true) {
	            	subMenus.push(child);
	            }
            }
        }
    });

    model.menuItems = subMenus;
    // END MENUITEM CODE


    model.content = portal.getContent();

//    util.log(model.site);
//    util.log(model.content);

    // Get all the country contents
    var result = contentSvc.query({
        start: 0,
        count: 100,
        contentTypes: [
            app.name + ':country'
        ]
    });

    var contents = result.contents;
    var countries = new Array();

//	util.log(app.name);

    // Loop through the contents and extract the needed data
    for(var i = 0; i < contents.length; i++) {

        var country = {};
        country.name = contents[i].displayName;
        country.contentUrl = portal.pageUrl({
            id: contents[i]._id
        });
        countries.push(country);
    }

    // Add the country data to the model
    model.countries = countries;

    // Specify the view file to use
    var view = resolve('hello.html');

    // Compile HTML from the view with dynamic data from the model
    var body = thymeleaf.render(view, model);

    // Return the response object
    return {
        body: body
    }

};