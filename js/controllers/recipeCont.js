angular.module( 'app' ).controller('recipeCtrl', function($scope, mainService){


$scope.getRecipes = function() {
  mainService.getRecipes().then( function( recipes ) {
  $scope.recipes = recipes;
})
}

$scope.getRecipes();
})
// })
