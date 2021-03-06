// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).controller('ctrlPrincipal',function($scope, $http, $filter){
    $scope.mensaje='Bienvenido a angular con ionic!!';
    $scope.temperatura='';
   // $scope.date = new Date();
   //   $scope.ddMMMMyyyy = $filter('date')(new Date(), 'dd, MMMM yyyy');
     $scope.hh = parseInt($filter('date')(new Date(), 'HH'));
    console.log("La hora es "+$scope.hh);
    
     $http.get('http://campitos.elasticbeanstalk.com/estacion/temperatura').success(function(data){
        // console.log(data.length+" temperatura: "+data[12].temperatura);
         $scope.temperatura=data[$scope.hh].temperatura;
         
     });
})
