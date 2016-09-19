angular.module( 'app' ).service( 'mainService', function($http){
var gKey = 'AIzaSyCPjN739skTP9_n5nIGG7VFxFj8PI0vSl8';
var f2fKey = 'db04e0128954ca582a56b1e70d32c214';
var f2fBase = 'http://food2fork.com/api/search?key='
var f2fDes = '&q=dessert';
var f2fDin = '&q=dinner';
var f2fBreak = '&q=breakfast';
var fsClid = 'Q2DT3WOQVDO4GWWYTJ54XYZ5NYRFUCJZRX3NP2B4ZLGM3FUU'
var fsClscr = 'UMMNQ1EVEOOMKIDNKAU2LZ55H0NFYRMMQSD42MO0WU5DZ0YS'
var fsBase = 'https://api.foursquare.com/v2/venues/explore?client_id=' + fsClid + '&client_secret=' + fsClscr
var fsVersAndM = '&v=20140806&m=foursquare'

var ranStr = 'https://foursquare.com/explore?mode=url&near=Dallas%2C%20TX%2C%20United%20States&nearGeoId=72057594042612824&q=Food'

// &ll=40.7,-74&query=sushi&v=20140806&m=foursquare

  this.getBreakRecs = function() {
    return $http.get(f2fBase + f2fKey + f2fBreak
    ).then(function(response) {
           console.log(response.data.recipes);
           return response.data.recipes
   });
 }

  this.getDinRecs = function() {
     return $http.get(f2fBase + f2fKey + f2fDin
     ).then(function(response) {
            console.log(response.data.recipes);
            return response.data.recipes
    });
  }

  this.getDesserts = function() {
     return $http.get(f2fBase + f2fKey + f2fDes
     ).then(function(response) {
            console.log(response.data.recipes);
            return response.data.recipes
    });
  }

 this.findRest = function(city, state) {
   console.log(location)
   return $http.get(fsBase + '&near=' + city + ',' + state + '&section=food' + fsVersAndM  )
 .then(function(response) {
        console.log(response.data.response.groups[0].items)
        return response.data.response.groups[0].items;
 })
 }
});
