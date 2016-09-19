angular.module( 'app' )
.controller( 'restCtrl', function($scope, mainService, $rootScope) {


$scope.addToList = function( restaurant ) {
  var restData = {
    name: restaurant.venue.name
    , address: restaurant.venue.location.address
    , city: restaurant.venue.location.formattedAddress[1]
  }

  $rootScope.restList.push(restData);
}









})
