// THIS WON'T WORK LIKE SHAUN'S BECAUSE HE'S USING AN IN-ATOM SERVER.

var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', ['$scope', function($scope){

  $scope.ninjas = [
    {
      name: "Yoshi",
      belt: "green",
      rate: 50
    },
    {
      name: "Crystal",
      belt: "yellow",
      rate: 30
    },
    {
      name: "Ryu",
      belt: "orange",
      rate: 10
    },
    {
      name: "Shaun",
      belt: "black",
      rate: 1000
    }
  ];

}]);
