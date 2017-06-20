// This file is for doing the heavy lifting with logic.

angular.module('myApp')

// .factory service will hold data for us:
.factory('ShoppingListItems', function(){
	var items = [];
	function getList(){
		return items;	
		// return items as an array
	}
	// Return an object:
	return {
		getList: getList
	}
})