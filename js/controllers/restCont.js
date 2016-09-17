angular.module( 'app' ).controller( 'restCtrl', function($scope, mainService) {

  $scope.getRecipes = mainsService.getRecipes.then(function(receipes){
      $scope.receipes = receipes;
  })










})
