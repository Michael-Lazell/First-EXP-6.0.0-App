var portal = require('/lib/xp/portal'); // Import the portal functions
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the Thymeleaf rendering function
var urlLib = require('/lib/training/url'); // Include my fancy lib

// Handle the GET request
exports.get = function(req) {

    // Get the content that is using the page
    var content = portal.getContent();

    // Extract the main region which contains component parts
    var mainRegion = content.page.regions.main;

    var myUrl = urlLib.getAsJSON('http://api.openweathermap.org/data/2.5/weather?q=London,uk');

    // Prepare the model that will be passed to the view
    var model = {
        mainRegion: mainRegion,
        json: myUrl
    };

    // Specify the view file to use
    var view = resolve('hello-region.html');
    
    // Render the dynamic HTML with values from the model
    var body = thymeleaf.render(view, model);

    // Return the response object
    return {
        body: body
    };
};