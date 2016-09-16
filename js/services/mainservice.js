angular.module( 'app' ).service( 'mainService', function($http){
var gapi = 'AIzaSyCPjN739skTP9_n5nIGG7VFxFj8PI0vSl8';



  this.getData = function() {
    return $http.jsonp('https://developers.zomato.com/api/v2.1/cities?q=Dallas',
   {headers: { 'Accept': 'application/json', 'user-key': 'fa98dd4f79138244aebda2f2fac688e8'}})
   .then(function(response) {
           console.log(response.data);
           return response.data
   });
 }

  //                 .then( function( response ) {
  //                   console.log(response)
  //                       return response.recipes;
  //               } )
  //               return promise;
  // };




} )
