angular.module( 'app' )
.controller('homeCtrl', function($scope, mainService, $location, $rootScope){

$rootScope.restList =[];

$scope.getBreakRecs = function() {
  $location.path('/recipes')
  mainService.getBreakRecs().then( function( recipes ) {
  $rootScope.recipes = recipes;
})
}

$scope.getDinRecs = function() {
  $location.path('/recipes')
  mainService.getDinRecs().then( function( recipes ) {
  $rootScope.recipes = recipes;
})
}

$scope.getDesserts = function() {
  $location.path('/recipes')
  mainService.getDesserts().then( function( recipes ) {
  $rootScope.recipes = recipes;
})
}

$scope.findRest = function(city, state){
  console.log("hi");
  $location.path('/restaurants')
  mainService.findRest(city, state).then( function(restaurants) {
    $rootScope.restaurants = restaurants;
  })
}



})
