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

        $scope.setStatus = function(status) {
            if (status) {
                $scope.myDynamicClass = 'some-css-class';
                return "Закрыто";
            } else {
                $scope.myDynamicClass = 'background-color:gray;';
                return "Открыто";
            }
        };

        $scope.getStatusColor = function (status) {
            if (status) return "red";
            else  return "green";
        };

        $scope.voters = VotersFactory.query();
    }]);

app.controller('VoterDetailCtrl', ['$scope', '$routeParams', 'VoterFactory', '$location',
    function ($scope, $routeParams, VoterFactory,  $location) {

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

        // $scope.closeVoter = function () {
        //     VoterFactorySec.update({id : $scope.voter.id})
        //     $location.path('/');
        // };
        $scope.voter = VoterFactory.show({id: $routeParams.id});
    }]);

app.controller('VoterCreationCtrl', ['$scope', 'VotersFactory', '$location',
    function ($scope, VotersFactory, $location) {

        $scope.answers = [{"id":null,"answer":null, "voter_id": 1, "votes":1}];


        $scope.addAnswer = function(){
            $scope.answers.push({"id":null,"answer":null, "voter_id": 1, "votes":1})
        };

        $scope.removeAnswer = function() {
            var lastItem = $scope.answers.length-1;
            $scope.answers.splice(lastItem);
        };


        $scope.createNewVoter = function () {

            var voteer = {"id": 1, "question":$scope.voter.question,"start_date":null,"close_date":null,"isclosed":false,"answerses":$scope.answers};

            VotersFactory.create(voteer);
            $location.path('/');
            alert('Голосование успешно создано');
        }
    }]);

