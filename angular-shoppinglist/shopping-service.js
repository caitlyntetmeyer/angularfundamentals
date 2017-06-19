angular.module('myApp')

// .factory service will hold data for us:
.factory('ShoppingListItems', function(){
	var items = [];
	function getList(){
		return items;
	}
	// Return an object:
	return {
		getList: getList
	}
})