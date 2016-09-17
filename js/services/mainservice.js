angular.module( 'app' ).service( 'mainService', function($http){
var gKey = 'AIzaSyCPjN739skTP9_n5nIGG7VFxFj8PI0vSl8';
var f2fKey = 'db04e0128954ca582a56b1e70d32c214';
var f2fBase = 'http://food2fork.com/api/search?key='
var f2fDes = '&q=dessert';
var f2fDin = '&q=dinner';
var f2fBreak = '&q=breakfast';


  this.getRecipes = function() {
    return $http.get(f2fBase + f2fKey + f2fBreak
    ).then(function(response) {
           console.log(response.data.recipes);
           return response.data.recipes
   });
 }
  // };




} )
