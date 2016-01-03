var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
	when('/timelines', {
        templateUrl: 'partials/timelines.html'
      }).
      when('/chartlines', {
        templateUrl: 'partials/chartlines.html',
        controller: 'chartCtrl'
      }).
      otherwise({
        redirectTo: '/chartlines'
      });
  }]);
  
  app.controller('chartCtrl', function($scope) {
    $scope.changePage = function(page) {
           
           console.log("test : " + page);
    };
    
  });
  
  app.controller('chartCtrl', function($scope) {
    
    $scope.sub = function() {
      $scope.run = 'Q';
        $scope.timeLinePage = "1";
        console.log('click submit chartline');
    };
     /*
    $scope.changePage = function(page) {
           
           console.log("test : " + page);
           
          if("timelines" ==  page){
                $scope.chartPage = null;
                $scope.timeLinePage = 1;    
           }else if("chartlines" ==  page){
                $scope.chartPage = 1;
                $scope.timeLinePage = null;
           }else{
               $scope.timeLinePage = null;
               $scope.chartPage = null;
           }
      
    };*/
    
});