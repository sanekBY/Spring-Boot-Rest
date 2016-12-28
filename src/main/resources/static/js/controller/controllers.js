'use strict';

/* Controllers */

var app = angular.module('mycontrollers', []);


//Clear browser cache (in development mode)

//http://stackoverflow.com/questions/14718826/angularjs-disable-partial-caching-on-dev-machine
app.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
});

app.controller('VoterListCtrl', ['$scope', 'VotersFactory', 'VoterFactory', '$location',
    function ($scope, VotersFactory, VoterFactory, $location) {

        $scope.editVoter = function (voterId) {
            $location.path('/voter/' + voterId);
        };

        $scope.voters = VotersFactory.query();
        // $scope.voters = [{"id":1,"title":"Пер","text":"Comment","votes":5,"start_date":1451595600000,"close_date":1454274000000,"isclosed":false},{"id":2,"title":"Втор","text":"Comment 2","votes":15,"start_date":1451682000000,"close_date":1454619600000,"isclosed":false}];
    }]);

app.controller('VoterDetailCtrl', ['$scope', '$routeParams', 'VoterFactory', '$location',
    function ($scope, $routeParams, VoterFactory, $location) {

        // callback for ng-click 'updateVoter':
        $scope.updateVoter = function () {
            var radios = document.getElementsByName("radioBut");
            var x;
            for (var i = 0,  length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                    x = parseInt(radios[i].value, 10);
                    // x = 1;
                    break;
                }
            }
            VoterFactory.update({id : x});
            $location.path('/');

        };
        $scope.voter = VoterFactory.show({id: $routeParams.id});
    }]);

app.controller('VoterCreationCtrl', ['$scope', 'VotersFactory', '$location',
    function ($scope, VotersFactory, $location) {

        // callback for ng-click 'createNewUser':
        $scope.createNewVoter = function () {
            var voteer = {"id" : 1, "question": $scope.voter.question, "start_date":null,"close_date":null,"isclosed":false};
            VotersFactory.create(voteer);
            $location.path('/');
        }
    }]);

