var app = angular.module('VoterApp', []);

app.controller('VoterListCtrl', ['$scope', 'VotersFactory', 'VoterFactory', '$location',
    function ($scope, VotersFactory, VoterFactory, $location) {

        // callback for ng-click 'editUser':
        $scope.editVoter = function (id) {
            $location.path('/voter/' + id);
        };
        //
        // // callback for ng-click 'createUser':
        // $scope.createNewUser = function () {
        //     $location.path('/user-creation');
        // };

        $scope.voters = VotersFactory.query();
    }]);


app.controller("AppCtrl", ["$scope", "$http",function ($scope, $http) {
    $scope.voters = [];

        $http.get('http://localhost:8080/api/voter-list')
            .success(function(data) {
                $scope.voters = data;
            })
            .error(function(data) {
                console.log('error: data = ' , data);
            });

    $scope.findVoter = function() {

        $http.get('http://localhost:8080/api/voter')
            .success(function(data) {
                $scope.voter = data;
            })
            .error(function(data) {
                console.log('error: data = ' , data);
            });

    };
}]);



