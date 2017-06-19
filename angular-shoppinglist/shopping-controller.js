angular.module('myApp') 

// $scope is pulling all the data from the view:
.controller('ShoppingListController', ['$scope', 'ShoppingListItems',
function($scope, ShoppingListItems){ // callback
	var shoplist = $scope;

	shoplist.items = ShoppingListItems.getList();
	// Build an object:
	shoplist.addItem = function(newItem){
		shoplist.items.push({
			// The newItem.___'s are from shopping-list.html:
			name: shoplist.newItem.name,
			qty: shoplist.newItem.qty,
			priority: shoplist.newItem.priority
			})
	};
	// .removeItem() is coming from shopping-list.html, 
	// from the button near the bottom:
	shoplist.removeItem = function(item){
		var removeItem = shoplist.items.indexOf(item);
		shoplist.items.splice(removeItem, 1)
	};

	shoplist.removeAll = function(){
		shoplist.items = [];
	}

}]);
