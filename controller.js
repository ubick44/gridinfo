var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.sub = function() {
      $scope.run = 'O';
        console.log('Hello world');
    };
});