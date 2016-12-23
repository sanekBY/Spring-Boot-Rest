/**
 * Created by sashqua on 23.12.16.
 */
var app = angular.module("springDemo", []);
app.controller("AppCtrl", function ($scope, $http) {

    $scope.voters = [];

    $http({
        method: 'GET',
        url: 'http://localhost:8080/api/voter-list'
    }).then(function successCallback(response) {
        $scope.voters = response.data;
    }, function errorCallback(response) {
        $scope.voters = [];
    });

});
