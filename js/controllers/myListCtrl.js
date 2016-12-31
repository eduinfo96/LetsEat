angular.module( 'app' ).controller( 'myListCtrl', function($scope, $rootScope, mainService) {
  $scope.visited = false;

  $scope.crossMe = function(){
    $scope.visited = true;
  }
});
