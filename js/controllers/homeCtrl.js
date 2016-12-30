angular.module( 'app' )
.controller('homeCtrl', function($scope, mainService, $location, $rootScope){

$rootScope.restList =[];

$scope.getBreakRecs = function() {
  $location.path('/recipes')
  mainService.getBreakRecs().then( function( recipes ) {
    for( let i = 0; i < recipes.length; i++ ){
      recipes[i].title = recipes[i].title.length <= 62 ? recipes[i].title : recipes[i].title.split("").splice(0, 59).join("") + "...";
    }
  $rootScope.recipes = recipes;
})
}

$scope.getDinRecs = function() {
  $location.path('/recipes')
  mainService.getDinRecs().then( function( recipes ) {
    for( let i = 0; i < recipes.length; i++ ){
      recipes[i].title = recipes[i].title.length <= 62 ? recipes[i].title : recipes[i].title.split("").splice(0, 59).join("") + "...";
    }
  $rootScope.recipes = recipes;
})
}

$scope.getDesserts = function() {
  console.log("hi")
  $location.path('/recipes')
  mainService.getDesserts().then( function( recipes ) {
    for( let i = 0; i < recipes.length; i++ ){
      recipes[i].title = recipes[i].title.length <= 62 ? recipes[i].title : recipes[i].title.split("").splice(0, 59).join("") + "...";
    }
  $rootScope.recipes = recipes;
})
}

$scope.findRest = function(city, state){
  $location.path('/restaurants')
  mainService.findRest(city, state).then( function(restaurants) {
    $rootScope.restaurants = restaurants;
  })
}



})
