angular.module( 'app' ).directive('myListDir', function() {
    return {
      template:'<li>{{item.name}}, {{item.address}}, {{item.city}} </li>'
      , restrict: 'E'
      , scope: {
          item: '='
      }
    }




})
