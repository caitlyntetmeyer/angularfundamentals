/* 
myApp is from index.html.

Anything inside of the square brackets is a service that'll be included into
our application. ngRoute is a service built into Angular.
*/
var app = angular.module('myApp', ['ngRoute'])
// The ngRoute module provides routing and deeplinking services and directives 
// for AngularJS apps.
	// $routeProvider - pull info from ngRoute
	.config(['$routeProvider', function($routeProvider){
		// $routeProvider is used for configuring routes:
		$routeProvider
			/* 
			When a user reaches the root page ('/'), they'll be navigated to
			home.html:
			*/
			.when('/', {
				templateUrl: "views/home.html"
			}).otherwise({
				redirectTo: "/home"
			})
			// Create routing - If a user types "/home", go to "view/home.html":
			.when('/home', {
				templateUrl: "views/home.html",
				controller: "HomeController"
			})
			.when('/shopping-list', {
				templateUrl: "views/shopping-list.html",
				// Angular needs the controller to be named "ShoppingListController"
				// because the syntax has to be "PageNameController":
				controller: "ShoppingListController",
				// Create an alias (alternate name) for ShoppingListController:
				controllerAs: "shoplist"
			}).otherwise({
				redirectTo: "/home"
			});
}]);