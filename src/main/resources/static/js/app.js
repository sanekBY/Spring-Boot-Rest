'use strict';
var app = angular.module('ngdemoApp', ['mycontrollers', 'myservices']);


app.config(['$routeProvider', '$locationProvider',
        function($routeProvider,  $locationProvider) {
        $routeProvider.when('/', {templateUrl: 'voter-list.html', controller: 'VoterListCtrl'})
        .when('/voter/:id', {templateUrl: 'voter.html', controller: 'VoterDetailCtrl'})
        .when('/create-vote', {templateUrl: 'create.html'});
        // $routeProvider.when('/', {templateUrl: '/test.html'});
        $locationProvider.html5Mode(true).hashPrefix('!');
    }]);


app.controller('AddStudentController', function($scope) {
    $scope.users = [{"id":1,"title":"Пер","text":"Comment","votes":5,"start_date":1451595600000,"close_date":1454274000000,"isclosed":false},{"id":2,"title":"Втор","text":"Comment 2","votes":15,"start_date":1451682000000,"close_date":1454619600000,"isclosed":false}];
});

app.controller('Adds', function($scope) {
    $scope.v = {"id":1,"title":"Пер","text":"Comment","votes":5,"start_date":1451595600000,"close_date":1454274000000,"isclosed":false};
});