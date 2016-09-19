angular.module( 'app', ['ui.router'] )
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('Home', {
        url:'/'
        , controller: 'homeCtrl'
        , templateUrl:'../views/home.html'
      })
      .state('Recipes', {
          url:'/recipes'
          , templateUrl: '../views/recipes.html'
          , controller: 'recipeCtrl'
      })
      .state('Restaurants', {
          url:'/restaurants'
          , templateUrl: '../views/restaurants.html'
          , controller: "restCtrl"
      })
      .state('myList', {
          url: '/mylist'
          , templateUrl: '../views/myList.html'
      })



  })
