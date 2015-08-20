Folders and files
==================

This folder contains all the folders controlling this Application. All these folders have a certain purpose in EXP. Keep reading for a detailed explanation.

"site.xml"
------------------

This is the file that controls this App's main settings, like it's display name and configuration.

assets
------------------
Store all your public files here, like JavaScript, CSS, and images for your design.

content-types
------------------
XML definitions of all the different content types available by adding this App to a Site in EXP.

il8n
------------------
Contains .phrases files that are used to easily translate a web site.

layouts
------------------
Layouts are parts of a Page Template, but instead of containing the entire html code, with the head-tag, this just adds some wrapping elements around the parts so you easily can create "70/30" pages and "50/50" pages on the same page template code!

lib
------------------
Server side library code, like utilities, helpers, STK, and such.

mixins
------------------
Adding the same fields to all your content-types? Add them here as a mixin instead and just include that file everywhere you need it.

pages
------------------
The main framework of the site (the html and head). This is the code that wraps your parts. You can create infinite amount of Page Templates from the same page config inside the EXP admin interface. Each Page Template then has it's own choice of Parts.

parts
------------------
All the small building blocks of a site, EXP's widgets/modules/portlets. Small blocks of code and functionality, like "5 most recent comments", or "Today's top stories", or "My image gallery". These can easily be moved around in EXP "live edit" mode.

services
------------------
Isolated functionality defined in javascript files that you can call upon from your Page Templates, Parts, and such. Do more complex stuff here, like create actual Content inside the EXP database.