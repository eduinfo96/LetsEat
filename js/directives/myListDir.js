angular.module( 'app' ).directive('myListDir', function() {
    return {
      template:'<div class="rest-info"><li style="list-style-type: circle;" ng-class="{cross: visited}">{{item.name}},  {{item.address}},  {{item.city}}</li></div> <input type="checkbox" ng-click="crossMe()" ng-model="visited"> </input> '
      , restrict: 'E'
      , scope: {
          item: '='
      }
    }




})
