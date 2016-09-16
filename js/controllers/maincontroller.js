  angular.module( 'app' ).controller( 'mainController' , function($scope, mainService){
    $scope.getData = function() {
      mainService.getData().then( function( result ) {
        $scope.recipe = result;
      })
    }

    $scope.getData();
    // $scope.toggleFavorite = mainService.toggleFavorite;
  })
