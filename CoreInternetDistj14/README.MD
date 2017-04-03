Four web pages has been created for this assignment.

SignIn, SignUp, AboutMe and Gallery.cshtml

The project has been created using ASP.net core.

As of now the navigation bar is shown on every page. When the login functionality has benn created
this will change so that the user is redirected to the login page if user is not logged in.
The login page will not be a link in the navigation bar if the user is logged in.

A rather small css file has been created under wwwroot->css->site.css
The css just handles some simple layout of the page and the visual representation.

A small javascript file has been created in wwwroot->js->pwChecker.js
	The purpose of this file is to check the clients input form on the client side.
	The reason being there is no need to make a call to the server if the data can
	be checked on the client side. The data still needs to be checked on the server
	side when the backend is created.