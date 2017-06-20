// "Everything is a part of this same, unified 'myApp'."
angular.module('myApp')
/* 
$scope is a keyword that grabs data from the view; connecter between View and 
Controller.

Dependency Injection:
*/
.controller('HomeController',['$scope', 'ShoppingListItems', 
 // Function will pass in info from $scope and Service to build out our logic:
 function($scope, ShoppingListItems) {
	var home  = $scope; 
	// Show our items array:
	home.items = ShoppingListItems.getList();
}]);	/* This function is a callback! "After we've got all the stuff, let's do 
some logic based on the $scope of our view and sth from the service 
(home.items = ShoppingListItems.getList()"

Square brackets above - dependency injection
*/