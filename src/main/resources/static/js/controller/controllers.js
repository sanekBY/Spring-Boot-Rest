'use strict';

/* Controllers */

var app = angular.module('mycontrollers', []);


// Clear browser cache (in development mode)
//
// http://stackoverflow.com/questions/14718826/angularjs-disable-partial-caching-on-dev-machine
// app.run(function ($rootScope, $templateCache) {
//     $rootScope.$on('$viewContentLoaded', function () {
//         $templateCache.removeAll();
//     });
// });

app.controller('UserListCtrl', ['$scope', 'UsersFactory', 'UserFactory', '$location',
    function ($scope, UsersFactory, UserFactory, $location) {

        $scope.editUser = function (userId) {
            $location.path('/voter/' + userId);
        };

        $scope.users = UsersFactory.query();
        // $scope.users = [{"id":1,"title":"Пер","text":"Comment","votes":5,"start_date":1451595600000,"close_date":1454274000000,"isclosed":false},{"id":2,"title":"Втор","text":"Comment 2","votes":15,"start_date":1451682000000,"close_date":1454619600000,"isclosed":false}];
    }]);

app.controller('UserDetailCtrl', ['$scope', '$routeParams', 'UserFactory', '$location',
    function ($scope, $routeParams, UserFactory, $location) {

        // callback for ng-click 'updateUser':
        $scope.updateUser = function () {
            UserFactory.update($scope.user);
            $location.path('/user-list');
        };

        // callback for ng-click 'cancel':
        $scope.cancel = function () {
            $location.path('/user-list');
        };

        $scope.user = UserFactory.show({id: $routeParams.id});
    }]);