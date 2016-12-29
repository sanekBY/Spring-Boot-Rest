'use strict';
var app = angular.module('ngdemoApp', ['mycontrollers', 'myservices']);

app.config(['$routeProvider', '$locationProvider',
        function($routeProvider,  $locationProvider) {
        $routeProvider.when('/', {templateUrl: 'voter-list.html', controller: 'VoterListCtrl'})
        .when('/voter/:id', {templateUrl: 'voter.html', controller: 'VoterDetailCtrl'})
        .when('/create-vote', {templateUrl: 'create-vote.html', controller: 'VoterCreationCtrl'})
        .otherwise('/', {templateUrl: 'voter-list.html', controller: 'VoterListCtrl'});
        $locationProvider.html5Mode(true).hashPrefix('!');
    }]);
