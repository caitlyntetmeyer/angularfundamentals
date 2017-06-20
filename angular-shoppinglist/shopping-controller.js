// This file is for moving data to and from locations.

angular.module('myApp') 

// $scope is pulling all the data from the view:
.controller('ShoppingListController', ['$scope', 'ShoppingListItems',
function($scope, ShoppingListItems){ // callback
	var shoplist = $scope;
	// Define our Service that has its array:
	shoplist.items = ShoppingListItems.getList();
	// Build an object:
	shoplist.addItem = function(newItem){
		// Push an object containing name, qty and priority to an array:
		shoplist.items.push({
			// The newItem.___'s are from shopping-list.html:
			// shopList comes from the $scope.
			/* Grab data, save it in the correct place, send it to an 
			array in our Service" */
			// "Grab this new item, .name":
			name: shoplist.newItem.name,
			qty: shoplist.newItem.qty,
			priority: shoplist.newItem.priority
			})
	};
	// .removeItem() is coming from shopping-list.html, 
	// from the button near the bottom:
	// Takes away items from our list:
	shoplist.removeItem = function(item){
		/*
		.indexOf returns the 1st index at which a given element can be found in the array, 
		or -1 if it is not present.
		*/
		var removedItem = shoplist.items.indexOf(item);
		/* 
		The splice() method changes the contents of an array by removing
		existing elements and/or adding new elements:
		*/
		shoplist.items.splice(removedItem, 1);
	};

	shoplist.removeAll = function(){
		/* 
		Make it so that when user clicks "Remove All", the items STAY removed
		from ALL locations:
		*/
		shoplist.items.length = 0;
	}

}]);








