angular.module( 'app' )
.controller('recipeCtrl', function($scope, mainService, $location, $rootScope){


$scope.getBreakRecs = function() {
  $location.path('/recipes');
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


})
// })
